import type { ReactNode } from 'react';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;

  /*
    Controls the maximum width of the modal.
   */
  size?: ModalSize;

  /*
    Whether the close button is rendered.
   */
  showCloseButton?: boolean;

  /*
    Whether clicking the backdrop closes the modal.
   */
  closeOnOverlayClick?: boolean;

  /*
    Whether pressing Escape closes the modal.
   */
  closeOnEscape?: boolean;

  /*
     Additional classes for the dialog element.
   */
  className?: string;
}