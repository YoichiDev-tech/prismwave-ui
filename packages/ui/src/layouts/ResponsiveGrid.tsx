import type { HTMLAttributes } from 'react';
import { cn } from '../utils/cn';

export interface ResponsiveGridProps extends HTMLAttributes<HTMLDivElement> { minColumnWidth?: string; }
export function ResponsiveGrid({ minColumnWidth = '16rem', className, style, ...props }: ResponsiveGridProps) { return <div className={cn('grid gap-6', className)} style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`, ...style }} {...props} />; }
