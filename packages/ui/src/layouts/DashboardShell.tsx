import type { ReactNode } from 'react';
import { cn } from '../utils/cn';

export interface DashboardShellProps {
  sidebar: ReactNode;
  topbar: ReactNode;
  children: ReactNode;
  className?: string;
}
export function DashboardShell({ sidebar, topbar, children, className }: DashboardShellProps) {
  return (
    <div className={cn('min-h-screen bg-canvas', className)}>
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r bg-canvas lg:block">
        {sidebar}
      </aside>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 border-b bg-canvas/95 backdrop-blur">{topbar}</header>
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
