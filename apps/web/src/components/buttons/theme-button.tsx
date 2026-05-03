import { IconButton } from '@nipakk/ui/components/button';
import { useTheme } from '@/hooks/use-theme';
import { THEME_ICON } from '@/constants';

export const ThemeButton = () => {
  const { nextTheme, toggleTheme } = useTheme();

  return (
    <IconButton
      variant='outline'
      icon={THEME_ICON[nextTheme]}
      tooltip={`Switch to ${nextTheme}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${nextTheme}`}
    />
  );
};
