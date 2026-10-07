import type { ReactNode } from 'react';

export interface AccordionItem {
  id: string;
  title: ReactNode;
  content: ReactNode;
}
export interface AccordionProps {
  items: AccordionItem[];
  multiple?: boolean;
}
