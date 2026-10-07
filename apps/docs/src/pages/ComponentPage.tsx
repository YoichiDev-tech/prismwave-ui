import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Badge, Button, Card, CardContent, Checkbox, Dropdown, Input, Modal, Pagination, Select, Skeleton, Switch, Table, Tabs, Toast, ToastViewport, Tooltip } from '@prismwave/ui';
import { CodeBlock } from '../components/CodeBlock';

const componentMeta: Record<string, { title: string; description: string; props: string[]; variants: string[]; code: string; a11y: string }> = {
  button: { title: 'Button', description: 'We use this action control with semantic variants and sizes.', props: ['variant', 'size', 'loading', 'disabled', 'type'], variants: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'link'], code: `<Button variant="primary">Continue</Button>`, a11y: 'We use a native button, preserve disabled semantics, and provide a visible focus ring.' },
  input: { title: 'Input', description: 'We use this labeled text field with hint and error messaging.', props: ['label', 'hint', 'error', 'placeholder', 'disabled'], variants: ['default', 'error'], code: `<Input label="Email" placeholder="hello@prismwave.studio" />`, a11y: 'We associate the visible label and message with the input through native labels and aria-describedby relationships.' },
  select: { title: 'Select', description: 'We use this native select control with typed props.', props: ['label', 'error', 'value', 'disabled'], variants: ['default', 'error'], code: `<Select label="Role"><option>Designer</option></Select>`, a11y: 'We preserve platform keyboard navigation and accessibility behavior by using a native select.' },
  checkbox: { title: 'Checkbox', description: 'We pair this native checkbox with an associated label.', props: ['label', 'checked', 'disabled'], variants: ['default'], code: `<Checkbox label="Accept terms" />`, a11y: 'We use a native checkbox and associated label for reliable keyboard and screen-reader support.' },
  switch: { title: 'Switch', description: 'We support controlled and uncontrolled toggle state with this switch.', props: ['checked', 'defaultChecked', 'onCheckedChange', 'label'], variants: ['on', 'off'], code: `<Switch label="Notifications" defaultChecked />`, a11y: 'We expose role=switch and aria-checked on a focusable button.' },
  badge: { title: 'Badge', description: 'We use this compact label to show status and metadata.', props: ['variant'], variants: ['default', 'secondary', 'outline', 'success', 'warning', 'destructive'], code: `<Badge variant="success">Active</Badge>`, a11y: 'We render a non-interactive semantic span. We pair dynamic status badges with surrounding text or status semantics.' },
  card: { title: 'Card', description: 'We compose this surface primitive with header, content, and footer helpers.', props: ['className'], variants: ['surface'], code: `<Card><CardContent>Content</CardContent></Card>`, a11y: 'We treat the card as a neutral surface and add a heading when it represents a distinct content region.' },
  modal: { title: 'Modal', description: 'We render this portal-based dialog with Escape-key support.', props: ['open', 'onClose', 'title', 'description'], variants: ['dialog'], code: `<Modal open={open} onClose={onClose} title="Confirm">...</Modal>`, a11y: 'We label the dialog, expose dialog and aria-modal semantics, close it on Escape, and restore body scrolling.' },
  dropdown: { title: 'Dropdown', description: 'We use this simple menu for contextual actions.', props: ['trigger', 'items', 'align'], variants: ['start', 'end'], code: `<Dropdown trigger="Actions" items={[{ id: 'edit', label: 'Edit' }]} />`, a11y: 'We expose menu and menuitem roles and aria-expanded on the trigger.' },
  tabs: { title: 'Tabs', description: 'We use this control to switch between single-selection content panels.', props: ['items', 'value', 'defaultValue', 'onValueChange'], variants: ['default'], code: `<Tabs items={[{ id: 'overview', label: 'Overview', content: '...' }]} />`, a11y: 'We use tablist, tab, and tabpanel roles with aria-selected and labelled panels.' },
  accordion: { title: 'Accordion', description: 'We organize collapsible content sections with this accordion.', props: ['items', 'multiple'], variants: ['single', 'multiple'], code: `<Accordion items={[{ id: 'faq', title: 'FAQ', content: 'Answer' }]} />`, a11y: 'We expose expanded state on each button and associate it with its controlled panel.' },
  tooltip: { title: 'Tooltip', description: 'We show this short contextual hint for an element.', props: ['content', 'children'], variants: ['hover', 'focus'], code: `<Tooltip content="Helpful context"><Button>Info</Button></Tooltip>`, a11y: 'We show the tooltip on pointer hover and keyboard focus and expose role=tooltip.' },
  toast: { title: 'Toast', description: 'We use this transient notification primitive to share status updates.', props: ['title', 'description', 'tone', 'onClose'], variants: ['default', 'success', 'warning', 'destructive'], code: `<Toast title="Saved" tone="success" onClose={dismiss} />`, a11y: 'We use a live status region so assistive technology can announce asynchronous feedback.' },
  skeleton: { title: 'Skeleton', description: 'We use this loading placeholder while content is not yet available.', props: ['className'], variants: ['default'], code: `<Skeleton className="h-10 w-full" />`, a11y: 'We hide this purely visual loading indicator from assistive technology.' },
  table: { title: 'Table', description: 'We render typed data with optional custom cell renderers in this table.', props: ['columns', 'data', 'getRowKey'], variants: ['default'], code: `<Table columns={columns} data={rows} />`, a11y: 'We use semantic table, thead, tbody, th scope, and td elements.' },
  pagination: { title: 'Pagination', description: 'We navigate data sets with this control and identify the current page semantically.', props: ['page', 'pageCount', 'onPageChange'], variants: ['default'], code: `<Pagination page={1} pageCount={5} onPageChange={setPage} />`, a11y: 'We use a labelled navigation landmark and aria-current for the active page.' },
};

const propDescriptions: Record<string, string> = {
  align: 'We align the menu edge using this value.',
  checked: 'We set the current checked state with this value.',
  children: 'We render this content inside the component.',
  className: 'We add or override utility classes on the root element with this value.',
  columns: 'We define table columns, headers, and optional cell renderers with this value.',
  content: 'We show this text or content in the associated panel or tooltip.',
  defaultChecked: 'We set the initial checked state with this value when the component is uncontrolled.',
  defaultValue: 'We set the initial selected value with this value when the component is uncontrolled.',
  description: 'We show supporting text with this value.',
  disabled: 'We prevent interaction and communicate the disabled state with this value.',
  error: 'We display an error message and expose the invalid state with this value.',
  getRowKey: 'We return a stable key for each rendered row with this function.',
  hint: 'We show supplementary guidance for the field with this value.',
  items: 'We provide the options, items, or data to render with this collection.',
  label: 'We provide the visible, accessible label with this value.',
  loading: 'We show a pending state and prevent duplicate activation with this value.',
  multiple: 'We allow multiple items to be selected or expanded with this value.',
  onChange: 'We call this function when the value changes.',
  onCheckedChange: 'We call this function when the checked state changes.',
  onClose: 'We call this function when the component closes or is dismissed.',
  onPageChange: 'We call this function when the selected page changes.',
  onValueChange: 'We call this function when the selected value changes.',
  open: 'We control the component visibility with this value.',
  page: 'We set the currently selected page with this value.',
  pageCount: 'We set the total number of available pages with this value.',
  placeholder: 'We show this hint before a value is entered.',
  size: 'We choose the component’s visual size with this value.',
  title: 'We provide the component’s primary heading or label with this value.',
  tone: 'We choose the semantic status treatment with this value.',
  trigger: 'We provide the element that opens the menu with this value.',
  type: 'We set the native button type with this value.',
  value: 'We control the selected value with this prop.',
  variant: 'We choose the visual style with this value.',
};

const componentOrder = Object.keys(componentMeta);

function Preview({ name }: { name: string }) { const [open, setOpen] = useState(false); const [page, setPage] = useState(1); switch (name) {
  case 'button': return <div className="flex flex-wrap gap-3"><Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="outline">Outline</Button><Button variant="destructive">Delete</Button></div>;
  case 'input': return <div className="max-w-md"><Input label="Email" placeholder="hello@prismwave.studio" hint="We use this address to demonstrate the field." /></div>;
  case 'select': return <div className="max-w-md"><Select label="Role"><option>Frontend developer</option><option>Designer</option></Select></div>;
  case 'checkbox': return <Checkbox label="Subscribe to updates" />;
  case 'switch': return <Switch label="Enable notifications" defaultChecked />;
  case 'badge': return <div className="flex flex-wrap gap-2"><Badge>Default</Badge><Badge variant="success">Success</Badge><Badge variant="warning">Warning</Badge><Badge variant="destructive">Error</Badge></div>;
  case 'card': return <Card className="max-w-md"><CardContent className="p-6"><h3 className="font-semibold">Project Aurora</h3><p className="mt-2 text-sm text-muted-foreground">We reuse this surface for our product content.</p></CardContent></Card>;
  case 'modal': return <><Button onClick={() => setOpen(true)}>Open modal</Button><Modal open={open} onClose={() => setOpen(false)} title="Confirm action" description="We can undo this action later."><Button onClick={() => setOpen(false)}>Continue</Button></Modal></>;
  case 'dropdown': return <Dropdown trigger={<Button variant="outline">Actions</Button>} items={[{ id: 'edit', label: 'Edit' }, { id: 'archive', label: 'Archive' }]} />;
  case 'tabs': return <div className="w-full max-w-xl"><Tabs items={[
    { id: 'overview', label: 'Overview', content: <div className="rounded-pw-lg border border-border bg-canvas p-5"><p className="text-sm font-medium text-primary">Project overview</p><h3 className="mt-1 text-lg font-semibold">Aurora dashboard</h3><p className="mt-2 text-sm text-muted-foreground">We bring project status, team activity, and key metrics together in one place.</p></div> },
    { id: 'activity', label: 'Activity', content: <div className="rounded-pw-lg border border-border bg-canvas p-5"><p className="text-sm font-medium text-primary">Recent activity</p><h3 className="mt-1 text-lg font-semibold">Three updates this week</h3><p className="mt-2 text-sm text-muted-foreground">We reviewed the design, shipped the new dashboard, and invited two teammates.</p></div> },
  ]} /></div>;
  case 'accordion': return <Accordion items={[{ id: 'one', title: 'How do we use Prismwave?', content: 'We build with an open-source React UI system.' }, { id: 'two', title: 'How do we approach accessibility?', content: 'We target WCAG AA contrast for our default themes.' }]} />;
  case 'tooltip': return <Tooltip content="More information"><Button variant="outline">Hover or focus me</Button></Tooltip>;
  case 'toast': return <><Button onClick={() => setOpen(true)}>Show toast</Button>{open && <ToastViewport><Toast id="profile-saved" title="Changes saved" description="We updated our profile settings." tone="success" onClose={() => setOpen(false)} /></ToastViewport>}</>;
  case 'skeleton': return <div className="grid max-w-md gap-3"><Skeleton className="h-6 w-2/3" /><Skeleton className="h-10 w-full" /><Skeleton className="h-20 w-full" /></div>;
  case 'table': return <Table columns={[{ key: 'name', header: 'Name' }, { key: 'status', header: 'Status', render: (row) => <Badge variant="success">{String(row.status)}</Badge> }]} data={[{ name: 'Aurora', status: 'Active' }, { name: 'Lumen', status: 'Active' }]} />;
  case 'pagination': return <Pagination page={page} pageCount={5} onPageChange={setPage} />;
  default: return null;
} }

export function ComponentPage({ name }: { name: string }) {
  const meta = componentMeta[name];
  const componentIndex = componentOrder.indexOf(name);
  if (!meta) {
    return (
      <section className="mx-auto grid min-h-[45vh] max-w-lg content-center justify-items-start">
        <p className="eyebrow">Component not found</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight">We don’t have that one yet.</h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">We can browse our component list to find an available example.</p>
        <Link to="/" className="mt-6 inline-flex h-10 items-center justify-center rounded-pw border border-border bg-canvas px-4 text-sm font-medium shadow-sm transition hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary">Back to overview</Link>
      </section>
    );
  }
  const previousName = componentOrder[componentIndex - 1];
  const nextName = componentOrder[componentIndex + 1];
  const previousComponent = previousName ? componentMeta[previousName] : undefined;
  const nextComponent = nextName ? componentMeta[nextName] : undefined;

  return (
    <div className="space-y-10">
      <header>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Component</Badge>
          <span className="text-base font-medium text-muted-foreground">@prismwave/ui</span>
        </div>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{meta.title}</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">{meta.description}</p>
      </header>

      <section aria-labelledby="component-preview">
        <div className="mb-3 flex items-end justify-between">
          <h2 id="component-preview" className="font-display text-lg font-semibold tracking-tight">Live preview</h2>
          <span className="text-sm text-muted-foreground">Interactive example</span>
        </div>
        <Card className="overflow-hidden border-border/80 shadow-none">
          <CardContent className="component-live-preview flex min-h-40 items-center justify-center bg-[radial-gradient(ellipse_at_center,hsl(var(--pw-color-primary)/0.07),transparent_65%)] p-6 sm:p-10">
            <Preview name={name} />
          </CardContent>
        </Card>
      </section>

      <section aria-label="Component usage">
        <h2 className="mb-3 font-display text-lg font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={meta.code} />
      </section>

      <section aria-labelledby="component-props">
        <h2 id="component-props" className="mb-3 font-display text-lg font-semibold tracking-tight">Props</h2>
        <div className="overflow-x-auto rounded-pw-lg border border-border/80">
          <table className="w-full text-sm">
            <thead className="bg-muted/60">
              <tr><th scope="col" className="px-4 py-3 text-left font-semibold">Prop</th><th scope="col" className="px-4 py-3 text-left font-semibold">Description</th></tr>
            </thead>
            <tbody className="divide-y divide-border">
              {meta.props.map((prop) => (
                <tr key={prop} className="bg-canvas">
                  <td className="px-4 py-3 font-mono text-xs">{prop}</td>
                  <td className="px-4 py-3 text-muted-foreground">{propDescriptions[prop] ?? 'Configures component-specific behavior.'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="component-variants">
        <h2 id="component-variants" className="mb-3 font-display text-lg font-semibold tracking-tight">Variants</h2>
        <div className="flex flex-wrap gap-2">{meta.variants.map((variant) => <Badge key={variant} variant="outline">{variant}</Badge>)}</div>
      </section>

      <section className="rounded-pw-lg border border-primary/15 bg-primary/[0.035] p-5 sm:p-6" aria-labelledby="component-accessibility">
        <h2 id="component-accessibility" className="font-display text-lg font-semibold tracking-tight">Accessibility</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{meta.a11y}</p>
      </section>

      <nav aria-label="Component pages" className="grid gap-3 border-t border-border/80 pt-6 sm:grid-cols-2">
        {previousName && previousComponent ? (
          <Link to={`/components/${previousName}`} className="group rounded-pw-lg border border-border/80 p-4 transition hover:border-primary/30 hover:bg-muted/25">
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Previous component</span>
            <span className="mt-1 block font-display text-sm font-semibold group-hover:text-primary">{previousComponent.title}</span>
          </Link>
        ) : <span />}
        {nextName && nextComponent && (
          <Link to={`/components/${nextName}`} className="group rounded-pw-lg border border-border/80 p-4 text-left transition hover:border-primary/30 hover:bg-muted/25 sm:text-right">
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Next component</span>
            <span className="mt-1 block font-display text-sm font-semibold group-hover:text-primary">{nextComponent.title}</span>
          </Link>
        )}
      </nav>
    </div>
  );
}
