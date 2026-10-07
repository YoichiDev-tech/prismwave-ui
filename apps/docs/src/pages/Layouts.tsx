import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  DashboardShell,
  PageContainer,
  ResponsiveGrid,
  SettingsLayout,
} from '@prismwave/ui';
import { CodeBlock } from '../components/CodeBlock';

const layouts = [
  'DashboardShell',
  'MarketingPage',
  'AuthLayout',
  'SettingsLayout',
  'PageContainer',
  'ResponsiveGrid',
];

export function Layouts() {
  const [selected, setSelected] = useState('DashboardShell');
  const code = `import { ${selected} } from '@prismwave/ui';\n\n<${selected}>\n  {/* We render our page content here. */}\n</${selected}>`;

  return (
    <div className="space-y-10">
      <header>
        <p className="eyebrow">Page composition</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Layout templates
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">
          We use these full-page structures to keep spacing, navigation, and responsive behavior
          consistent. We can select a layout to preview how we use it.
        </p>
      </header>

      <section aria-label="Layout selection" className="flex flex-wrap gap-2">
        {layouts.map((layout) => (
          <Button
            key={layout}
            variant={selected === layout ? 'primary' : 'outline'}
            size="sm"
            aria-pressed={selected === layout}
            onClick={() => setSelected(layout)}
          >
            {layout}
          </Button>
        ))}
      </section>

      <Card className="overflow-hidden border-border/80 shadow-none">
        <CardHeader className="border-b border-border/70 bg-muted/25">
          <CardTitle className="text-base">
            {selected} <span className="ml-1 font-normal text-muted-foreground">preview</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="min-h-72 overflow-hidden rounded-pw-lg border border-border/80 bg-muted/30">
            {selected === 'DashboardShell' ? (
              <DashboardShell
                sidebar={<div className="p-5 font-semibold">Workspace</div>}
                topbar={<div className="p-4">Topbar</div>}
              >
                <ResponsiveGrid>
                  <Card>
                    <CardContent className="p-6">Metric</CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">Activity</CardContent>
                  </Card>
                </ResponsiveGrid>
              </DashboardShell>
            ) : selected === 'SettingsLayout' ? (
              <SettingsLayout
                sidebar={
                  <div className="grid gap-2">
                    <Button variant="ghost">Profile</Button>
                    <Button variant="ghost">Security</Button>
                  </div>
                }
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Settings</CardTitle>
                  </CardHeader>
                  <CardContent>Account preferences and controls.</CardContent>
                </Card>
              </SettingsLayout>
            ) : (
              <PageContainer className="py-12">
                <div className="rounded-pw-lg border border-border/80 bg-canvas p-8 shadow-sm">
                  <h2 className="font-display text-2xl font-semibold">{selected}</h2>
                  <p className="mt-2 text-muted-foreground">
                    We use this responsive template as a starting point for our product content.
                  </p>
                </div>
              </PageContainer>
            )}
          </div>
        </CardContent>
      </Card>

      <section aria-label="Layout usage example">
        <p className="eyebrow mb-3">Usage</p>
        <CodeBlock code={code} />
      </section>
    </div>
  );
}
