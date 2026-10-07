import { useEffect } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { DocsShell } from './components/DocsShell';
import { Home } from './pages/Home';
import { Tokens } from './pages/Tokens';
import { Layouts } from './pages/Layouts';
import { ComponentPage } from './pages/ComponentPage';

export function App() {
  return (
    <DocsShell>
      <RouteEffects />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tokens" element={<Tokens />} />
        <Route path="/layouts" element={<Layouts />} />
        <Route path="/components/:name" element={<ComponentRoute />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </DocsShell>
  );
}

function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    const segment = pathname.split('/').filter(Boolean).pop();
    const pageTitle = segment
      ? segment.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
      : 'We build better interfaces';
    document.title = `${pageTitle} | Prismwave UI`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function ComponentRoute() { const { name = '' } = useParams(); return <ComponentPage name={name} />; }

function NotFound() {
  return (
    <section className="mx-auto grid min-h-[55vh] max-w-lg content-center justify-items-start">
      <p className="eyebrow">404 · Page not found</p>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">We couldn’t find this page.</h1>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">We may have moved this page or the link may be outdated. We can return to our overview and find what we need.</p>
      <Link to="/" className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-pw border border-border bg-canvas px-4 text-sm font-medium shadow-sm transition hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary">
        <ArrowLeft size={15} /> Back to overview
      </Link>
    </section>
  );
}
