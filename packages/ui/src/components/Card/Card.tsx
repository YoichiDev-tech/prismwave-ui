import { forwardRef } from 'react';
import { cn } from '../../utils/cn';
import type { CardProps } from './Card.types';

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, ...props },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cn('rounded-pw-lg border bg-canvas shadow-pw', className)}
      {...props}
    />
  );
});

export const CardHeader = ({ className, ...props }: CardProps) => (
  <div className={cn('grid gap-1.5 p-6', className)} {...props} />
);
export const CardTitle = ({ className, ...props }: CardProps) => (
  <h3 className={cn('font-display text-lg font-semibold', className)} {...props} />
);
export const CardDescription = ({ className, ...props }: CardProps) => (
  <p className={cn('text-sm text-muted-foreground', className)} {...props} />
);
export const CardContent = ({ className, ...props }: CardProps) => (
  <div className={cn('p-6 pt-0', className)} {...props} />
);
export const CardFooter = ({ className, ...props }: CardProps) => (
  <div className={cn('flex items-center p-6 pt-0', className)} {...props} />
);
