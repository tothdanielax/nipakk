import { Checkbox } from '@nipakk/ui/components/checkbox';
import { Field, FieldLabel } from '@nipakk/ui/components/field';
import { Tooltip, TooltipContent, TooltipTrigger } from '@nipakk/ui/components/tooltip';
import { Paragraph } from '@nipakk/ui/components/typography';
import type { Package } from '@/constants';

type Props = {
  item: Package;
  isSelected: boolean;
  onToggle: () => void;
};

export const PackageItem = ({ item, isSelected, onToggle }: Props) => (
  <Tooltip>
    <Field orientation='horizontal' className='w-fit gap-2'>
      <Checkbox checked={isSelected} onCheckedChange={onToggle} id={item.slug} />
      <TooltipTrigger
        render={(triggerProps) => (
          <FieldLabel
            {...triggerProps}
            htmlFor={item.slug}
            className='hover:bg-muted/50 flex-1 cursor-pointer rounded-sm px-1 py-0.5'
          >
            {item.name ?? item.slug}
          </FieldLabel>
        )}
      />
    </Field>
    <TooltipContent side='right' className='max-w-48 flex-col items-start'>
      <Paragraph size='xs' mono className='mt-0.5'>
        {item.type}
      </Paragraph>
      <Paragraph size='xs'>{item.description}</Paragraph>
    </TooltipContent>
  </Tooltip>
);
