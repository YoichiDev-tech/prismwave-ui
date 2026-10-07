import { forwardRef, useState } from 'react';
import { cn } from '../../utils/cn';
import type { SwitchProps } from './Switch.types';

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(function Switch(
  { checked, defaultChecked = false, onCheckedChange, label, className, ...props },
  ref,
) {
  const [internal, setInternal] = useState(defaultChecked);
  const value = checked ?? internal;
  const toggle = () => {
    const next = !value;
    if (checked === undefined) setInternal(next);
    onCheckedChange?.(next);
  };
  return (
    <label className="inline-flex items-center gap-2 text-sm">
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={value}
        onClick={toggle}
        className={cn(
          'relative h-6 w-11 rounded-full bg-muted transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          value && 'bg-primary',
          className,
        )}
        {...props}
      >
        <span
          aria-hidden="true"
          className={cn(
            'absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform',
            value && 'translate-x-5',
          )}
        />
      </button>
      {label}
    </label>
  );
});
