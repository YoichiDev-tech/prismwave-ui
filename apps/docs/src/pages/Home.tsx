import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Component,
  Layers3,
  MousePointer2,
  Tag,
} from 'lucide-react';
import { Badge, Card, CardContent } from '@prismwave/ui';

const highlights = [
  { icon: Check, title: 'Thoughtful by default', detail: 'We build in accessible patterns and useful states from the start.' },
  { icon: Layers3, title: 'Made to compose', detail: 'We keep our typed building blocks small and easy to compose in React.' },
  { icon: Code2, title: 'Ready for our stack', detail: 'We ship Tailwind tokens, ESM packages, and practical examples from day one.' },
];

const examples = [
  { name: 'Button', tone: 'bg-violet-50 text-violet-600', icon: Component },
  { name: 'Input', tone: 'bg-blue-50 text-blue-600', icon: Code2 },
  { name: 'Card', tone: 'bg-emerald-50 text-emerald-600', icon: Layers3 },
  { name: 'Modal', tone: 'bg-amber-50 text-amber-600', icon: Component },
];

const componentSamples = [
  { name: 'Buttons', category: 'Actions', href: '/components/button', icon: MousePointer2 },
  { name: 'Inputs', category: 'Forms', href: '/components/input', icon: Braces },
  { name: 'Badges', category: 'Feedback', href: '/components/badge', icon: Tag },
  { name: 'Cards', category: 'Surfaces', href: '/components/card', icon: Layers3 },
];

export function Home() {
  return (
    <div className="space-y-20 sm:space-y-24">
      <section className="home-hero relative isolate overflow-hidden rounded-[1.75rem] border border-[#252849] bg-[#101326] text-white shadow-[0_28px_80px_-38px_rgba(34,31,80,0.55)]">
        <div className="hero-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div className="hero-glow absolute -right-24 -top-40 -z-10 h-[28rem] w-[34rem] rounded-full bg-violet-500/20 blur-[100px]" aria-hidden="true" />
        <div className="hero-glow hero-glow-cyan absolute -bottom-64 left-1/3 -z-10 h-[28rem] w-[32rem] rounded-full bg-cyan-400/10 blur-[100px]" aria-hidden="true" />
        <div className="grid items-center gap-12 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-14 lg:py-16">
          <div className="relative z-10">
            <Badge className="border border-white/10 bg-white/[0.07] px-3.5 py-1 text-sm text-violet-100">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Open source · MIT licensed
            </Badge>
            <p className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200/80">
              We design with intent
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl xl:text-[3.5rem]">
              We build better interfaces.
              <span className="hero-heading-accent block">We skip the busywork.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              We bring accessible React components, considered design tokens, and reusable layouts together to help us ship polished products.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link to="/components/button">
                <span className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-pw bg-white px-5 text-sm font-semibold text-[#17182b] shadow-lg shadow-black/20 transition hover:bg-violet-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto">
                  Explore components <ArrowRight size={16} />
                </span>
              </Link>
              <a href="#getting-started" className="inline-flex h-12 items-center justify-center gap-2 rounded-pw px-4 text-sm font-medium text-white/80 transition hover:bg-white/[0.07] hover:text-white">
                Get started <ArrowDown size={15} />
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-300">
              {['React + TypeScript', 'Tailwind CSS', 'Keyboard accessible'].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5"><Check size={13} className="text-emerald-300" />{item}</span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[31rem] lg:ml-auto">
            <div className="hero-orbit absolute -inset-5 rounded-[2rem] border border-white/[0.08]" aria-hidden="true" />
            <div className="hero-preview relative overflow-hidden rounded-2xl border border-white/10 bg-[#fafaff] p-3 text-slate-900 shadow-[0_24px_80px_-25px_rgba(0,0,0,0.7)] sm:p-4">
              <div className="flex items-center justify-between border-b border-slate-200/80 px-2 pb-3">
                <div className="flex items-center gap-1.5" aria-hidden="true"><i className="h-2 w-2 rounded-full bg-[#fb7185]" /><i className="h-2 w-2 rounded-full bg-[#fbbf24]" /><i className="h-2 w-2 rounded-full bg-[#34d399]" /></div>
                <span className="text-[10px] font-medium text-slate-400">prismwave / preview</span>
                <span className="h-3 w-3" />
              </div>
              <div className="grid grid-cols-[7rem_minmax(0,1fr)] gap-4 pt-4">
                <div className="space-y-2 rounded-xl bg-slate-100/80 p-3">
                  <div className="mb-4 flex items-center gap-1.5 text-[9px] font-bold text-slate-800"><span className="h-3 w-3 rounded bg-violet-500" /> workspace</div>
                  {['Overview', 'Components', 'Tokens', 'Settings'].map((item, index) => <div key={item} className={`rounded-md px-2 py-1.5 text-[9px] ${index === 1 ? 'bg-white font-semibold text-violet-700 shadow-sm' : 'text-slate-500'}`}>{item}</div>)}
                </div>
                <div className="min-w-0 space-y-3 p-1">
                  <div className="flex items-center justify-between">
                    <div><p className="text-[8px] font-medium uppercase tracking-[0.15em] text-violet-600">Component library</p><p className="mt-1 text-sm font-bold tracking-tight">Good design, in reach.</p></div>
                    <span className="rounded-lg bg-violet-600 px-2.5 py-1.5 text-[8px] font-semibold text-white">+ Add new</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {examples.map(({ name, tone, icon: Icon }) => <div key={name} className="rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-[0_2px_6px_rgba(15,23,42,0.03)]">
                      <span className={`mb-2 flex h-6 w-6 items-center justify-center rounded-md ${tone}`}><Icon size={12} /></span>
                      <p className="text-[9px] font-semibold">{name}</p>
                      <p className="mt-0.5 text-[8px] text-slate-400">We compose with ease</p>
                    </div>)}
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-emerald-100 bg-emerald-50/80 p-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white"><Check size={11} /></span>
                    <span className="text-[8px] font-medium text-emerald-900">Accessible by default</span>
                    <span className="ml-auto text-[8px] text-emerald-700">WCAG AA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-float absolute -bottom-5 -left-5 hidden items-center gap-2.5 rounded-xl border border-white/10 bg-[#1d2037]/95 px-3 py-2.5 text-white shadow-xl sm:flex">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300"><Check size={15} /></span>
              <span><span className="block text-[10px] font-semibold">Types included</span><span className="block text-[9px] text-slate-400">Strict TypeScript</span></span>
            </div>
            <div className="absolute -right-3 top-12 hidden rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-[10px] font-medium text-violet-100 backdrop-blur sm:block">16 components</div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/[0.08] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400 sm:px-14">
          <span>Design thoughtfully. Ship confidently.</span>
          <span className="hidden sm:inline">We care about the details that matter.</span>
        </div>
      </section>

      <section aria-labelledby="principles-heading">
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Why Prismwave</p>
            <h2 id="principles-heading" className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">We build a strong foundation, not more overhead.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">We handle the small details so we can focus on what makes each product different.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, detail }, index) => (
            <Card key={title} className="home-feature-card group overflow-hidden border-border/80 bg-canvas shadow-none transition duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-pw">
              <CardContent className="p-6 sm:p-7">
                <div className={`feature-icon feature-icon-${index}`}><Icon size={19} strokeWidth={1.8} /></div>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section aria-labelledby="components-heading">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">Our component library</p>
            <h2 id="components-heading" className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">We make the details ready for our next idea.</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">We start with a polished primitive and compose it into something unmistakably ours.</p>
          </div>
          <Link to="/components/button" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline">
            Browse all 16 components <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {componentSamples.map(({ name, category, href, icon: Icon }) => (
            <Link key={name} to={href} className="home-component-link group rounded-2xl">
              <Card className="home-component-card h-full overflow-hidden border-border/80 shadow-none transition duration-200 group-hover:-translate-y-1 group-hover:border-primary/35 group-hover:shadow-pw">
                <div className="flex items-center justify-between border-b border-border/70 px-4 py-3">
                  <span className="flex items-center gap-2 text-[11px] font-semibold text-muted-foreground">
                    <Icon size={14} className="text-primary" /> {category}
                  </span>
                  <ArrowUpRight size={14} className="text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <CardContent className="flex min-h-32 flex-col justify-between p-4">
                  {name === 'Buttons' && (
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-8 items-center rounded-pw bg-primary px-3 text-xs font-medium text-primary-foreground shadow-sm">Continue</span>
                      <span className="inline-flex h-8 items-center rounded-pw border border-border px-3 text-xs font-medium">Cancel</span>
                    </div>
                  )}
                  {name === 'Inputs' && (
                    <div className="flex h-9 items-center rounded-pw border border-input bg-canvas px-3 text-xs text-muted-foreground shadow-sm">
                      hello@prismwave.studio
                    </div>
                  )}
                  {name === 'Badges' && <div className="flex flex-wrap gap-2"><Badge variant="success">Shipped</Badge><Badge variant="secondary">In review</Badge></div>}
                  {name === 'Cards' && (
                    <div className="rounded-xl border border-border/80 bg-muted/20 p-3">
                      <p className="text-xs font-semibold">We design each surface with care</p>
                      <p className="mt-1 text-[11px] text-muted-foreground">Simple. Composable. Ours.</p>
                    </div>
                  )}
                  <span className="mt-4 flex items-center justify-between">
                    <span className="font-display text-sm font-semibold">{name}</span>
                    <span className="text-[11px] text-muted-foreground">View example</span>
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section id="getting-started" className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">We are a few commands away</p>
          <h2 className="mt-2 max-w-md font-display text-2xl font-semibold tracking-tight sm:text-3xl">We start with a better baseline.</h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">We explore live examples, bring the components we need into our projects, and make them our own.</p>
          <Link to="/components/button" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            Browse the component library <ArrowRight size={15} />
          </Link>
        </div>
        <div className="rounded-2xl border border-border/80 bg-[#111426] p-5 text-slate-100 shadow-pw sm:p-6">
          <div className="mb-4 flex items-center gap-2 text-xs text-slate-400"><span className="h-2 w-2 rounded-full bg-emerald-400" /> We install our package</div>
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.035] p-4 font-mono text-xs leading-6 sm:text-sm">
            <p><span className="text-violet-300">$</span> <span className="text-slate-200">pnpm add @prismwave/ui</span></p>
            <p className="mt-3 text-slate-500">// We import our shared styles once</p>
            <p><span className="text-cyan-300">import</span> <span className="text-emerald-200">'@prismwave/ui/styles.css'</span>;</p>
            <p><span className="text-cyan-300">import</span> {'{ Button }'} <span className="text-cyan-300">from</span> <span className="text-emerald-200">'@prismwave/ui'</span>;</p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">React · TypeScript · Tailwind</span>
            <Link to="/tokens" className="inline-flex items-center gap-1 text-xs font-medium text-violet-200 transition hover:text-white">Explore tokens <ArrowUpRight size={13} /></Link>
          </div>
        </div>
      </section>

      <section className="home-bottom-cta flex flex-col gap-5 rounded-2xl border border-primary/15 bg-gradient-to-r from-primary/[0.07] via-violet-500/[0.05] to-cyan-400/[0.07] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">Open source, built together</p>
          <h2 className="mt-2 font-display text-xl font-semibold tracking-tight">Good UI should be within everyone's reach.</h2>
          <p className="mt-1 text-sm text-muted-foreground">We explore the system and help shape what comes next.</p>
        </div>
        <Link to="/layouts" className="inline-flex h-10 w-full shrink-0 items-center justify-center gap-2 rounded-pw border border-border bg-canvas px-4 text-sm font-medium shadow-sm transition hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary sm:w-auto">
          Explore layouts <ArrowRight size={15} />
        </Link>
      </section>
    </div>
  );
}
