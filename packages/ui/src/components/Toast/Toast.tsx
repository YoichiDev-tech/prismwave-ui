import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';
import type { ToastProps } from './Toast.types';

export function Toast({ title, description, tone = 'default', onClose }: ToastProps) {
  return (
    <div
      role="status"
      className={cn(
        'w-full max-w-sm rounded-pw border bg-canvas p-4 shadow-pw-lg',
        tone === 'success' && 'border-success',
        tone === 'warning' && 'border-warning',
        tone === 'destructive' && 'border-destructive',
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-medium">{title}</p>
          {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close notification"
          className="text-muted-foreground"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export function ToastViewport({ children }: { children: ReactNode }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 grid gap-2" aria-live="polite">
      {children}
    </div>
  );
}
