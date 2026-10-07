import { Badge, Card, CardContent, CardHeader, CardTitle, ResponsiveGrid } from '@prismwave/ui';

const colors = [
  'canvas',
  'foreground',
  'muted',
  'muted-foreground',
  'border',
  'primary',
  'secondary',
  'accent',
  'destructive',
  'success',
  'warning',
  'info',
];
const typeScale = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'];
const spacing = ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16', '18', '20', '22', '24'];

export function Tokens() {
  return (
    <div className="space-y-14">
      <header>
        <Badge variant="secondary">Design system</Badge>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Design tokens
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
          We use semantic CSS variables to connect our visual language to every component. We keep
          the system consistent through these shared values.
        </p>
      </header>

      <section aria-labelledby="color-tokens">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Palette</p>
            <h2
              id="color-tokens"
              className="mt-1 font-display text-xl font-semibold tracking-tight"
            >
              Color
            </h2>
          </div>
          <span className="text-xs text-muted-foreground">{colors.length} semantic colors</span>
        </div>
        <ResponsiveGrid minColumnWidth="12rem">
          {colors.map((name) => (
            <Card key={name} className="overflow-hidden border-border/80 shadow-none">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm">{name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className="h-16 rounded-pw border border-border/70 shadow-inner"
                  style={{ background: `hsl(var(--pw-color-${name}))` }}
                />
                <code className="mt-3 block truncate text-[11px] text-muted-foreground">
                  --pw-color-{name}
                </code>
              </CardContent>
            </Card>
          ))}
        </ResponsiveGrid>
      </section>

      <section aria-labelledby="type-tokens">
        <div className="mb-5">
          <p className="eyebrow">Typography</p>
          <h2 id="type-tokens" className="mt-1 font-display text-xl font-semibold tracking-tight">
            Type scale
          </h2>
        </div>
        <div className="divide-y divide-border rounded-pw-lg border border-border/80 bg-canvas px-5 sm:px-6">
          {typeScale.map((size) => (
            <div key={size} className="flex min-h-14 items-center gap-4 py-3">
              <code className="w-12 shrink-0 text-xs text-muted-foreground">{size}</code>
              <span
                className="min-w-0 truncate font-display"
                style={{ fontSize: `var(--pw-font-size-${size})` }}
              >
                Prismwave UI
              </span>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="spacing-tokens">
        <div className="mb-5">
          <p className="eyebrow">Rhythm</p>
          <h2
            id="spacing-tokens"
            className="mt-1 font-display text-xl font-semibold tracking-tight"
          >
            Spacing
          </h2>
        </div>
        <div className="grid gap-4 rounded-pw-lg border border-border/80 bg-canvas p-5 sm:p-6">
          {spacing.map((size) => (
            <div key={size} className="flex items-center gap-4">
              <code className="w-8 shrink-0 text-xs text-muted-foreground">{size}</code>
              <div
                className="h-3 rounded-full bg-gradient-to-r from-primary to-accent"
                style={{ width: `var(--pw-space-${size})` }}
              />
              <span className="text-[11px] text-muted-foreground">{`${Number(size) * 0.25}rem`}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
