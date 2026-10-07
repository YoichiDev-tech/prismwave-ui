import { cn } from '../../utils/cn';
import type { SkeletonProps } from './Skeleton.types';

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('animate-pulse rounded bg-muted', className)}
      {...props}
    />
  );
}
