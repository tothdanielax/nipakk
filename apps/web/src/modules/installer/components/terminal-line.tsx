import { Paragraph } from '@nipakk/ui/components/paragraph';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export const TerminalLine = ({ children, className }: Props) => {
  return (
    <div className='flex gap-1'>
      <Paragraph size='sm' weight='semibold' className='shrink-0 select-none'>
        nipakk &gt;
      </Paragraph>
      <Paragraph size='sm' className={className}>
        {children}
      </Paragraph>
    </div>
  );
};
