import { IconButton } from '@nipakk/ui/components/button';
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@nipakk/ui/components/card';
import { ScrollArea } from '@nipakk/ui/components/scroll-area';
import { Separator } from '@nipakk/ui/components/separator';
import { CopyIcon, DownloadIcon } from 'lucide-react';
import { SHORTCUTS } from '@/constants';
import { TerminalLine } from './terminal-line';

const GREETING = ["hi, I'm nipakk 🤖", "select the packages and I'll handle the rest!"];

type Props = {
  command: string;
  onCopy: () => void;
  onSave: () => void;
};

export const Terminal = ({ command, onCopy, onSave }: Props) => {
  return (
    <Card className='w-full max-w-2xl'>
      <CardHeader className='flex items-center justify-between'>
        <CardTitle>Terminal</CardTitle>
        <CardAction className='flex gap-1'>
          <IconButton
            variant='outline'
            icon={<CopyIcon />}
            aria-label={SHORTCUTS.COPY_COMMAND.label}
            tooltip={SHORTCUTS.COPY_COMMAND.label}
            onClick={onCopy}
          />
          <IconButton
            variant='outline'
            icon={<DownloadIcon />}
            aria-label={SHORTCUTS.SAVE_BREWFILE.label}
            tooltip={SHORTCUTS.SAVE_BREWFILE.label}
            onClick={onSave}
          />
        </CardAction>
      </CardHeader>
      <Separator />
      <CardContent className='font-mono text-green-600 dark:text-green-500'>
        <ScrollArea className='h-30'>
          {GREETING.map((line) => (
            <TerminalLine key={line}>{line}</TerminalLine>
          ))}
          <TerminalLine className='select-text'>
            {command || <span className='inline-block h-4 w-2 animate-pulse bg-current' />}
          </TerminalLine>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
