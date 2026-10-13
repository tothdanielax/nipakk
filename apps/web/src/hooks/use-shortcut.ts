import { useEffect } from 'react';
import type { Shortcut } from '@/constants';

export const useShortcut = (
  { key, mod = false }: Shortcut,
  onTrigger: (event: KeyboardEvent) => void
): void => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.repeat || event.altKey || event.shiftKey || event.key.toLowerCase() !== key) return;
      if ((event.metaKey || event.ctrlKey) !== mod) return;
      if (isEditable(event.target)) return;
      onTrigger(event);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, mod, onTrigger]);
};

const isEditable = (target: EventTarget | null): boolean => {
  return (
    target instanceof HTMLElement &&
    (target.isContentEditable || target.closest('input, textarea, select') !== null)
  );
};
