import type { ReactNode } from 'react';
import { PageContainer } from './PageContainer';

export interface SettingsLayoutProps { sidebar: ReactNode; children: ReactNode; }
export function SettingsLayout({ sidebar, children }: SettingsLayoutProps) { return <PageContainer className="grid gap-8 py-8 lg:grid-cols-[240px_1fr]"><aside>{sidebar}</aside><main className="min-w-0">{children}</main></PageContainer>; }
