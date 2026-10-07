import type { ReactNode } from 'react';

export interface DropdownItem {
  id: string;
  label: string;
  disabled?: boolean;
  onSelect?: () => void;
}
export interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  align?: 'start' | 'end';
}
