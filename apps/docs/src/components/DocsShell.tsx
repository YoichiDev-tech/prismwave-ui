import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Blocks, BookOpen, LayoutTemplate, Palette, Search, X } from 'lucide-react';
import { Input, PageContainer } from '@prismwave/ui';
import { ThemeToggle } from './ThemeToggle';

const sections = [
  {
    label: 'Get started',
    items: [{ label: 'Overview', href: '/', icon: BookOpen }],
  },
  {
    label: 'Foundations',
    items: [
      { label: 'Design tokens', href: '/tokens', icon: Palette },
      { label: 'Layouts', href: '/layouts', icon: LayoutTemplate },
    ],
  },
  {
    label: 'Components',
    items: ['Button', 'Input', 'Select', 'Checkbox', 'Switch', 'Badge', 'Card', 'Modal', 'Dropdown', 'Tabs', 'Accordion', 'Tooltip', 'Toast', 'Skeleton', 'Table', 'Pagination']
      .map((label) => ({ label, href: `/components/${label.toLowerCase()}`, icon: Blocks })),
  },
];

const allLinks = sections.flatMap((section) => section.items);

export function DocsShell({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();
  const desktopSearchRef = useRef<HTMLInputElement>(null);
  const mobileSearchRef = useRef<HTMLInputElement>(null);
  const filtered = useMemo(
    () => sections.map((section) => ({
      ...section,
      items: section.items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())),
    })).filter((section) => section.items.length > 0),
    [query],
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        if (window.matchMedia('(min-width: 1024px)').matches) {
          desktopSearchRef.current?.focus();
        } else {
          setMobileNavOpen(true);
        }
      }
      if (event.key === 'Escape') setMobileNavOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileNavOpen) mobileSearchRef.current?.focus();
  }, [mobileNavOpen]);

  const navigation = (mobile = false) => (
    <nav aria-label={mobile ? 'Mobile documentation' : 'Documentation'} className="space-y-7">
      {filtered.map((section) => (
        <div key={section.label}>
          <p className="docs-nav-heading">{section.label}</p>
          <div className="mt-2 space-y-1">
            {section.items.map((item) => {
              const active = location.pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  aria-current={active ? 'page' : undefined}
                  className={`docs-nav-link ${active ? 'docs-nav-link-active' : ''}`}
                >
                  <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                  <span>{item.label}</span>
                  {active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
      {query && allLinks.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())).length === 0 && (
        <p className="px-3 text-sm text-muted-foreground">No pages match “{query}”.</p>
      )}
    </nav>
  );

  return (
    <div className="min-h-screen bg-canvas text-foreground">
      <header className="docs-header sticky top-0 z-40 border-b border-border/80">
        <PageContainer className="flex h-[4.25rem] items-center gap-4">
          <Link to="/" className="group flex shrink-0 items-center gap-2.5" aria-label="Prismwave UI home">
            <span className="docs-brand-mark"><span /></span>
            <span className="font-display text-[1.05rem] font-bold tracking-tight">prismwave<span className="text-primary">.</span></span>
          </Link>
          <span className="hidden h-5 w-px bg-border sm:block" aria-hidden="true" />
          <span className="hidden text-sm text-muted-foreground sm:block">UI documentation</span>
          <div className="ml-auto flex items-center gap-2">
            <label className="docs-search hidden md:flex">
              <Search size={15} aria-hidden="true" />
              <Input
                ref={desktopSearchRef}
                aria-label="Search documentation"
                aria-keyshortcuts="Control+K Meta+K"
                placeholder="Search pages..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="h-9 border-0 bg-transparent px-1 text-base shadow-none focus-visible:ring-0"
              />
              <kbd className="hidden rounded border border-border bg-canvas px-1.5 py-0.5 text-[10px] text-muted-foreground lg:block">Ctrl / Meta K</kbd>
            </label>
            <span className="hidden rounded-full border border-border/80 px-3.5 py-1.5 text-sm font-medium text-muted-foreground sm:inline-flex">MIT licensed</span>
            <ThemeToggle />
            <button
              type="button"
              className="docs-icon-button lg:hidden"
              aria-label={mobileNavOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileNavOpen}
              aria-controls="mobile-docs-nav"
              onClick={() => setMobileNavOpen((open) => !open)}
            >
              {mobileNavOpen ? <X size={18} /> : <span className="docs-menu-icon"><i /><i /><i /></span>}
            </button>
          </div>
        </PageContainer>
        {mobileNavOpen && (
          <div id="mobile-docs-nav" className="border-t border-border bg-canvas px-5 py-5 lg:hidden">
            <div className="mb-5 flex items-center gap-2 rounded-pw border bg-muted/40 px-3">
              <Search size={15} className="shrink-0 text-muted-foreground" aria-hidden="true" />
              <Input
                ref={mobileSearchRef}
                aria-label="Search documentation"
                aria-keyshortcuts="Control+K Meta+K"
                placeholder="Search pages..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="h-10 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
              />
            </div>
            {navigation(true)}
          </div>
        )}
      </header>

      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[248px_minmax(0,1fr)]">
        <aside className="docs-sidebar hidden border-r border-border/80 lg:block">
          <div className="sticky top-[4.25rem] max-h-[calc(100vh-4.25rem)] overflow-y-auto px-5 py-8">
            <div className="mb-7 flex items-center justify-between px-3">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Documentation</span>
              <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">v0.1</span>
            </div>
            {navigation()}
            <div className="mt-10 rounded-pw-lg border border-border/80 bg-gradient-to-br from-primary/[0.07] to-accent/[0.08] p-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-pw bg-canvas text-primary shadow-sm"><Blocks size={16} /></div>
              <p className="mt-3 text-sm font-semibold">We build in the open.</p>
              <p className="mt-1 text-xs leading-5 text-muted-foreground">We welcome ideas that make our library better for everyone.</p>
              <Link className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline" to="/components/button">
                Explore components
              </Link>
            </div>
          </div>
        </aside>
        <main className="docs-main min-w-0 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          {children}
          <footer className="docs-footer mt-20 flex flex-col gap-3 border-t border-border/80 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <span>We build Prismwave UI in the open under the MIT License.</span>
            <span>We build for thoughtful interfaces.</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
