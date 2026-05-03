import { Paragraph } from '@nipakk/ui/components/typography';

type Props = {
  command?: string;
  className?: string;
};

export const Row = ({ command, className }: Props) => (
  <div className='flex gap-1'>
    <Paragraph className='shrink-0 select-none' weight='bold'>
      nipakk &gt;
    </Paragraph>
    <Paragraph className={className}>{command}</Paragraph>
  </div>
);
