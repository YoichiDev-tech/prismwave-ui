import type { ReactNode } from 'react';
import { cn } from '../utils/cn';

export interface AuthLayoutProps { children: ReactNode; brand?: ReactNode; className?: string; }
export function AuthLayout({ children, brand, className }: AuthLayoutProps) { return <main className="grid min-h-screen lg:grid-cols-2"><aside className="hidden bg-muted p-10 lg:flex lg:flex-col">{brand}</aside><section className={cn('flex items-center justify-center p-6', className)}><div className="w-full max-w-md">{children}</div></section></main>; }
