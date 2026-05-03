import type { ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';
import {
  COLOR_SCHEME_QUERY,
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  THEME_VALUES,
  type ResolvedTheme,
  type Theme
} from '@/constants';

type Props = {
  children: ReactNode;
};

type ThemeProviderState = {
  theme: Theme;
  nextTheme: Theme;
  toggleTheme: () => void;
};

export const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

const isTheme = (value: string | null): value is Theme =>
  value !== null && THEME_VALUES.includes(value as Theme);

const getSystemTheme = (): ResolvedTheme =>
  window.matchMedia(COLOR_SCHEME_QUERY).matches ? 'dark' : 'light';

const disableTransitionsTemporarily = (): (() => void) => {
  const style = document.createElement('style');
  style.appendChild(
    document.createTextNode(
      '*,*::before,*::after{-webkit-transition:none!important;transition:none!important}'
    )
  );
  document.head.appendChild(style);

  return () => {
    window.getComputedStyle(document.body);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        style.remove();
      });
    });
  };
};

const getNextTheme = (current: Theme): Theme =>
  THEME_VALUES[(THEME_VALUES.indexOf(current) + 1) % THEME_VALUES.length] as Theme;

const isEditableTarget = (target: EventTarget | null): boolean =>
  target instanceof HTMLElement &&
  (target.isContentEditable ||
    !!target.closest("input, textarea, select, [contenteditable='true']"));

const applyTheme = (theme: Theme, disableTransitions: boolean) => {
  const root = document.documentElement;
  const resolvedTheme = theme === 'system' ? getSystemTheme() : theme;
  const restoreTransitions = disableTransitions ? disableTransitionsTemporarily() : null;

  root.classList.remove('light', 'dark');
  root.classList.add(resolvedTheme);
  restoreTransitions?.();
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(storedTheme) ? storedTheme : DEFAULT_THEME;
  });

  const toggleTheme = () => {
    setThemeState((currentTheme) => {
      const nextTheme = getNextTheme(currentTheme);
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      return nextTheme;
    });
  };

  useEffect(() => {
    applyTheme(theme, true);

    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia(COLOR_SCHEME_QUERY);
    const handleChange = () => applyTheme('system', true);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat || event.metaKey || event.ctrlKey || event.altKey) return;
      if (isEditableTarget(event.target)) return;
      if (event.key.toLowerCase() !== 't') return;
      toggleTheme();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleTheme]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.storageArea !== localStorage || event.key !== THEME_STORAGE_KEY) return;
      setThemeState(isTheme(event.newValue) ? event.newValue : DEFAULT_THEME);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <ThemeProviderContext.Provider value={{ theme, nextTheme: getNextTheme(theme), toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
};
