import type { HTMLAttributes } from 'react';
import type { VariantProps } from '../../utils/variants';
import { badgeVariants } from './Badge';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;
