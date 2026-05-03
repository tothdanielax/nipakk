import { IconButton } from '@nipakk/ui/components/button';
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@nipakk/ui/components/card';
import { ScrollArea } from '@nipakk/ui/components/scroll-area';
import { Separator } from '@nipakk/ui/components/separator';
import { CopyIcon, DownloadIcon } from 'lucide-react';
import { Row } from './row';

type Props = {
  commands: string[];
  onCopy: () => void;
  onDownload: () => void;
};

export const Terminal = ({ commands, onCopy, onDownload }: Props) => {
  return (
    <Card className='max-w-2xl'>
      <CardHeader className='flex items-center justify-between'>
        <CardTitle>Terminal</CardTitle>
        <CardAction className='space-x-1'>
          <IconButton variant='outline' icon={CopyIcon} tooltip='Copy command' onClick={onCopy} />
          <IconButton
            variant='outline'
            icon={DownloadIcon}
            tooltip='Save as Brewfile'
            onClick={onDownload}
          />
        </CardAction>
      </CardHeader>
      <Separator />
      <CardContent className='space-y-1 py-4 font-mono text-green-600 dark:text-green-500'>
        <ScrollArea className='h-30'>
          <Row command="hi, i'm nipakk 🤖" />
          <Row command="select the packages you want to install and I'll handle the rest" />
          {commands.length > 0 && <Row command={commands.join(' && ')} className='select-text' />}
          {commands.length === 0 && (
            <Row className='h-5 w-2 animate-pulse bg-green-600 dark:bg-green-500' />
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
