import type { ButtonHTMLAttributes } from 'react';
import type { VariantProps } from '../../utils/variants';
import { buttonVariants } from './Button';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    loadingLabel?: string;
  };
