import type { ReactNode } from 'react';

export interface ToastData {
  id: string;
  title: string;
  description?: ReactNode;
  tone?: 'default' | 'success' | 'warning' | 'destructive';
}
export interface ToastProps extends ToastData {
  onClose: () => void;
}
