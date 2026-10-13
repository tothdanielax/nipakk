import { IconButton } from '@nipakk/ui/components/button';
import { MoonIcon, SunIcon } from 'lucide-react';
import { SHORTCUTS, THEME_STORAGE_KEY } from '@/constants';
import { useShortcut } from '@/hooks/use-shortcut';

export const ThemeToggle = () => {
  useShortcut(SHORTCUTS.TOGGLE_THEME, toggleTheme);

  return (
    <IconButton
      variant='outline'
      aria-label={SHORTCUTS.TOGGLE_THEME.label}
      tooltip={SHORTCUTS.TOGGLE_THEME.label}
      onClick={toggleTheme}
      icon={
        <>
          <SunIcon className='hidden dark:block' />
          <MoonIcon className='dark:hidden' />
        </>
      }
    />
  );
};

const toggleTheme = () => {
  const isDark = document.documentElement.classList.toggle('dark');
  try {
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
  } catch {}
};
