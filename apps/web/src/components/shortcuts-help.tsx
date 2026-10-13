import { IconButton } from '@nipakk/ui/components/button';
import { Kbd, KbdGroup } from '@nipakk/ui/components/kbd';
import { KeyboardIcon } from 'lucide-react';
import { SHORTCUTS } from '@/constants';

export const ShortcutsHelp = () => {
  return (
    <IconButton
      variant='outline'
      className='cursor-help pointer-coarse:hidden'
      aria-label='keyboard shortcuts'
      icon={<KeyboardIcon />}
      tooltip={
        <ul className='space-y-1'>
          {Object.values(SHORTCUTS).map((shortcut) => (
            <li key={shortcut.label} className='flex justify-between gap-4'>
              {shortcut.label}
              <KbdGroup>
                {'mod' in shortcut && <Kbd>⌘</Kbd>}
                <Kbd>{shortcut.key}</Kbd>
              </KbdGroup>
            </li>
          ))}
        </ul>
      }
    />
  );
};
