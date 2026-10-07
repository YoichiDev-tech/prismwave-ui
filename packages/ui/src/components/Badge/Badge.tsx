import { forwardRef } from 'react';
import { cva } from '../../utils/variants';
import { cn } from '../../utils/cn';
import type { BadgeProps } from './Badge.types';

export const badgeVariants = cva('inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold', {
  variants: {
    variant: {
      default: 'border-transparent bg-primary text-primary-foreground',
      secondary: 'border-transparent bg-secondary text-secondary-foreground',
      outline: 'text-foreground',
      success: 'border-transparent bg-success text-white',
      warning: 'border-transparent bg-warning text-black',
      destructive: 'border-transparent bg-destructive text-destructive-foreground',
    },
  },
  defaultVariants: { variant: 'default' },
});

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge({ className, variant, ...props }, ref) {
  return <span ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />;
});
