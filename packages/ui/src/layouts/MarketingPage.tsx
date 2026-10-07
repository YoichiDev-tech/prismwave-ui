import type { ReactNode } from 'react';
import { PageContainer } from './PageContainer';

export interface MarketingPageProps {
  nav?: ReactNode;
  hero: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}
export function MarketingPage({ nav, hero, children, footer }: MarketingPageProps) {
  return (
    <div className="min-h-screen bg-canvas">
      <header className="border-b">
        <PageContainer className="flex min-h-16 items-center">{nav}</PageContainer>
      </header>
      <main>
        <section className="py-20 sm:py-28">
          <PageContainer>{hero}</PageContainer>
        </section>
        {children}
      </main>
      {footer && (
        <footer className="border-t py-10">
          <PageContainer>{footer}</PageContainer>
        </footer>
      )}
    </div>
  );
}
