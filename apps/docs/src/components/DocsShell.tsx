import { useEffect, useState, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme, Button, Input, cn } from '@prismwave/ui';

const NAV = [
  {
    title: 'Guide',
    items: [
      { to: '/', label: 'Overview' },
      { to: '/getting-started', label: 'Getting started' },
      { to: '/tokens', label: 'Design tokens' },
      { to: '/layouts', label: 'Layouts' },
    ],
  },
  {
    title: 'Components',
    items: [
      { to: '/components/button', label: 'Button' },
      { to: '/components/input', label: 'Input' },
      { to: '/components/badge', label: 'Badge' },
      { to: '/components/card', label: 'Card' },
      { to: '/components/modal', label: 'Modal' },
      { to: '/components/select', label: 'Select' },
      { to: '/components/checkbox', label: 'Checkbox' },
      { to: '/components/switch', label: 'Switch' },
      { to: '/components/dropdown', label: 'Dropdown' },
      { to: '/components/tabs', label: 'Tabs' },
      { to: '/components/accordion', label: 'Accordion' },
      { to: '/components/tooltip', label: 'Tooltip' },
      { to: '/components/toast', label: 'Toast' },
      { to: '/components/skeleton', label: 'Skeleton' },
      { to: '/components/table', label: 'Table' },
      { to: '/components/pagination', label: 'Pagination' },
    ],
  },
];

function getPageTitle(pathname: string) {
  if (pathname === '/') return 'Overview';

  if (pathname.startsWith('/components/')) {
    const name = pathname.split('/')[2] || '';
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  const map: Record<string, string> = {
    '/getting-started': 'Getting started',
    '/tokens': 'Design tokens',
    '/layouts': 'Layouts',
  };

  return map[pathname] || pathname.replace(/^\//, '');
}

export function DocsShell({ children }: { children: ReactNode }) {
  const { theme, setTheme } = useTheme();

  const [search, setSearch] = useState('');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const location = useLocation();

  const resolvedTheme =
    theme === 'system'
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      : theme;

  const toggle = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  // Close mobile nav on route change
  useEffect(() => {
    setMobileNavOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (!mobileNavOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileNavOpen]);

  // Escape closes mobile nav
  useEffect(() => {
    if (!mobileNavOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileNavOpen(false);
      }
    };

    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
    };
  }, [mobileNavOpen]);

  const filtered = search.trim()
    ? NAV.flatMap((group) =>
        group.items.filter((item) =>
          item.label.toLowerCase().includes(search.toLowerCase()),
        ),
      )
    : null;

  return (
    <div className="min-h-screen min-h-[100dvh] overflow-x-hidden bg-background text-foreground">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border bg-card lg:flex">
        <div className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-4">
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
              PW
            </span>

            <span>PrismWave UI</span>
          </Link>
        </div>

        <div className="border-b border-border p-3">
          <Input
            className="h-9 text-sm"
            placeholder="Search…"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search documentation"
          />
        </div>

        <nav
          className="flex-1 overflow-y-auto p-3"
          aria-label="Documentation"
        >
          {filtered ? (
            <ul className="space-y-0.5">
              {filtered.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        'block rounded-md px-2.5 py-1.5 text-sm',
                        isActive
                          ? 'bg-accent font-medium text-accent-foreground'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}

              {filtered.length === 0 && (
                <li className="px-2.5 py-2 text-sm text-muted-foreground">
                  No results
                </li>
              )}
            </ul>
          ) : (
            NAV.map((group) => (
              <div key={group.title} className="mb-5">
                <p className="mb-1.5 px-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {group.title}
                </p>

                <ul className="space-y-0.5">
                  {group.items.map((item) => (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        end={item.to === '/'}
                        className={({ isActive }) =>
                          cn(
                            'block rounded-md px-2.5 py-1.5 text-sm',
                            isActive
                              ? 'bg-accent font-medium text-accent-foreground'
                              : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </nav>

        <div className="shrink-0 border-t border-border p-3 text-xs text-muted-foreground">
          MIT · v0.1.0
        </div>
      </aside>

      {/* Mobile navigation */}
      {mobileNavOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <div className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4">
            <Link
              to="/"
              className="flex items-center gap-2 font-semibold tracking-tight"
              onClick={() => setMobileNavOpen(false)}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
                PW
              </span>

              <span>PrismWave UI</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileNavOpen(false)}
              className="rounded-md p-2 text-muted-foreground hover:bg-muted"
              aria-label="Close navigation"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="border-b border-border p-3">
            <Input
              className="h-9 text-sm"
              placeholder="Search…"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search documentation"
              autoFocus
            />
          </div>

          <nav
            className="flex-1 overflow-y-auto overscroll-contain p-3"
            aria-label="Documentation"
          >
            {filtered ? (
              <ul className="space-y-0.5">
                {filtered.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      onClick={() => setMobileNavOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'block rounded-md px-3 py-2.5 text-base',
                          isActive
                            ? 'bg-accent font-medium text-accent-foreground'
                            : 'text-foreground hover:bg-muted',
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}

                {filtered.length === 0 && (
                  <li className="px-3 py-3 text-sm text-muted-foreground">
                    No results
                  </li>
                )}
              </ul>
            ) : (
              NAV.map((group) => (
                <div key={group.title} className="mb-6">
                  <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {group.title}
                  </p>

                  <ul className="space-y-0.5">
                    {group.items.map((item) => (
                      <li key={item.to}>
                        <NavLink
                          to={item.to}
                          end={item.to === '/'}
                          onClick={() => setMobileNavOpen(false)}
                          className={({ isActive }) =>
                            cn(
                              'block rounded-md px-3 py-2.5 text-base',
                              isActive
                                ? 'bg-accent font-medium text-accent-foreground'
                                : 'text-foreground hover:bg-muted',
                            )
                          }
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </nav>

          <div className="shrink-0 border-t border-border p-4 text-center text-xs text-muted-foreground">
            MIT · v0.1.0
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="w-full lg:pl-64">
        <header className="sticky top-0 z-20 flex h-14 items-center gap-2 border-b border-border bg-background/95 px-3 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:px-4">
          <button
            type="button"
            className="rounded-md p-2 text-muted-foreground hover:bg-muted lg:hidden"
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open navigation"
            aria-expanded={mobileNavOpen}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="min-w-0 flex-1 truncate text-sm font-medium">
            {getPageTitle(location.pathname)}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label={
              resolvedTheme === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            className="shrink-0"
          >
            {resolvedTheme === 'dark' ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l1.41 1.41" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </Button>

          <a
            href="https://github.com/YoichiDev-tech/prismwave-ui"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline"
          >
            GitHub
          </a>
        </header>

        <main className="px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
          <div className="mx-auto w-full max-w-3xl">{children}</div>
        </main>
      </div>
    </div>
  );
}