import { forwardRef, useId } from 'react';
import { cn } from '../../utils/cn';
import type { CheckboxProps } from './Checkbox.types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox({ id, label, className, ...props }, ref) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <label htmlFor={inputId} className={cn('inline-flex cursor-pointer items-center gap-2 text-sm', props.disabled && 'cursor-not-allowed opacity-50')}>
      <input ref={ref} id={inputId} type="checkbox" className={cn('h-4 w-4 rounded border accent-[hsl(var(--pw-color-primary))] focus-visible:ring-2 focus-visible:ring-primary', className)} {...props} />
      {label}
    </label>
  );
});
