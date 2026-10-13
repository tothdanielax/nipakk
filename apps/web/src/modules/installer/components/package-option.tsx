import type { Package } from '@nipakk/core/catalog';
import { Checkbox } from '@nipakk/ui/components/checkbox';
import { Field, FieldLabel } from '@nipakk/ui/components/field';
import { Paragraph } from '@nipakk/ui/components/paragraph';
import { Tooltip, TooltipContent, TooltipTrigger } from '@nipakk/ui/components/tooltip';

const COMPACT_NUMBER = new Intl.NumberFormat('en', { notation: 'compact' });

type Props = {
  pkg: Package;
  isSelected: boolean;
  onToggle: () => void;
};

// The label toggles via onClick, not htmlFor: a forwarded click lands outside the
// trigger and would close the touch popover right after it opens.
export const PackageOption = ({ pkg, isSelected, onToggle }: Props) => {
  const labelId = `${pkg.slug}-label`;

  return (
    <Tooltip>
      <Field orientation='horizontal' className='w-fit max-w-full min-w-0 gap-2'>
        <Checkbox checked={isSelected} onCheckedChange={onToggle} aria-labelledby={labelId} />
        <TooltipTrigger
          nativeButton={false}
          render={
            <FieldLabel
              id={labelId}
              onClick={onToggle}
              className='hover:bg-muted/50 min-w-0 cursor-pointer rounded-sm px-1 py-0.5 wrap-anywhere'
            />
          }
        >
          {pkg.slug}
        </TooltipTrigger>
      </Field>
      <TooltipContent side='right' className='max-w-56 flex-col items-start'>
        <Paragraph size='xs'>{pkg.description}</Paragraph>
        <Paragraph size='xs' className='opacity-70'>
          {pkg.kind} · {COMPACT_NUMBER.format(pkg.installs)} installs / year
        </Paragraph>
      </TooltipContent>
    </Tooltip>
  );
};
