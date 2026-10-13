import { cn } from 'cn';
import type { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLParagraphElement> & {
  size?: keyof typeof SIZE;
  weight?: keyof typeof WEIGHT;
};

export const Paragraph = ({ size = 'base', weight = 'normal', className, ...props }: Props) => {
  return <p className={cn(SIZE[size], WEIGHT[weight], className)} {...props} />;
};

const SIZE = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base'
} as const;

const WEIGHT = {
  normal: 'font-normal',
  semibold: 'font-semibold'
} as const;
