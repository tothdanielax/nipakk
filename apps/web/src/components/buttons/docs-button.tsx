import { IconButton } from '@nipakk/ui/components/button';
import { Kbd } from '@nipakk/ui/components/kdb';
import { BookIcon } from 'lucide-react';
import { Fragment } from 'react';
import { KEYBOARD_SHORTCUTS } from '@/constants';

export const DocsButton = () => (
  <IconButton
    variant='outline'
    className='cursor-help'
    aria-label='Keyboard shortcuts'
    icon={BookIcon}
    tooltip={
      <ul className='space-y-1'>
        {Object.entries(KEYBOARD_SHORTCUTS).map(([key, item]) => (
          <li key={key}>
            {item.label}:{' '}
            {item.shortcuts.map((shortcut, index) => (
              <Fragment key={shortcut}>
                <Kbd>{shortcut}</Kbd>
                {index !== item.shortcuts.length - 1 && ' + '}
              </Fragment>
            ))}
          </li>
        ))}
      </ul>
    }
  />
);
