import { useEffect, useId, useRef, type MouseEvent } from 'react';
import { createPortal } from 'react-dom';

import { cn } from '../../utils/cn';
import { trapFocus } from '../../utils/a11y';

import type { ModalProps } from './Modal.types';

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-[calc(100vw-2rem)]',
} satisfies Record<NonNullable<ModalProps['size']>, string>;

export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className,
}: ModalProps) {
  const dialogRef = useRef<HTMLElement>(null);

  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!open) return;

    const dialog = dialogRef.current;

    if (!dialog) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEscape) {
        event.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const cleanupFocusTrap = trapFocus(dialog);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = previousOverflow;
      cleanupFocusTrap();
    };
  }, [open, onClose, closeOnEscape]);

  if (!open) {
    return null;
  }

  const handleOverlayMouseDown = (
    event: MouseEvent<HTMLDivElement>,
  ) => {
    if (!closeOnOverlayClick) return;

    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 grid place-items-center overflow-y-auto p-4"
      role="presentation"
      onMouseDown={handleOverlayMouseDown}
    >
      <div
        className="absolute inset-0 bg-black/60"
        aria-hidden="true"
      />

      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
        className={cn(
          'relative z-10 w-full rounded-pw-lg border bg-canvas p-6 shadow-pw-lg',
          sizeClasses[size],
          className,
        )}
      >
        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className={cn(
              'absolute right-4 top-4 rounded p-1',
              'text-muted-foreground',
              'transition-colors',
              'hover:bg-muted',
              'hover:text-foreground',
              'focus-visible:outline-none',
              'focus-visible:ring-2',
              'focus-visible:ring-primary',
            )}
          >
            <span aria-hidden="true">×</span>
          </button>
        )}

        <h2
          id={titleId}
          className={cn(
            'font-display text-xl font-semibold',
            showCloseButton && 'pr-8',
          )}
        >
          {title}
        </h2>

        {description && (
          <p
            id={descriptionId}
            className="mt-2 text-sm text-muted-foreground"
          >
            {description}
          </p>
        )}

        <div className="mt-6">
          {children}
        </div>
      </section>
    </div>,
    document.body,
  );
}