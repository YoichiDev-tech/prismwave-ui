# Prismwave UI

At Prismwave Studio, we build Prismwave UI as an open-source, 
MIT-licensed React component library. We bring together Tailwind CSS, 
typed APIs, accessible primitives, reusable layouts, 
and documentation that helps us build polished interfaces with less busywork.

## Our stack

- React + TypeScript in strict mode
- Vite
- Tailwind CSS 3
- pnpm workspaces
- Vitest + Testing Library
- ESLint + Prettier
- Changesets
- GitHub Actions
- Vercel

## Our repository

```text
prismwave-ui/
├── apps/docs/              # Our documentation and showcase application
├── packages/ui/             # Our publishable @prismwave/ui package
│   └── src/
│       ├── tokens/          # Our CSS variables and Tailwind preset
│       ├── components/      # Our accessible, reusable components
│       ├── layouts/         # Our page-level layout primitives
│       ├── hooks/           # Our small React hooks
│       └── utils/            # Our class and accessibility utilities
├── .changeset/
├── .github/workflows/ci.yml
├── CONTRIBUTING.md
├── LICENSE
└── vercel.json
```

## Our local setup

We install the workspace dependencies and start our documentation app with:

```bash
pnpm install
pnpm dev
```

We can open the Vite development URL printed in our terminal.

## Our quality checks

We run our formatting, lint, test, and build checks with:

```bash
pnpm format:check
pnpm lint
pnpm test
pnpm build
```

## How we use the library

We install Prismwave UI in our application with:

```bash
pnpm add @prismwave/ui
```

We import the stylesheet once and then import the components we use:

```tsx
import '@prismwave/ui/styles.css';
import { Button, Card } from '@prismwave/ui';
```

## How we use the Tailwind preset

We can use the package preset to bring Prismwave token names into our Tailwind application:

```js
import prismwavePreset from '@prismwave/ui/tailwind';

export default {
  presets: [prismwavePreset],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@prismwave/ui/dist/**/*.{js,mjs}',
  ],
};
```

## Our design system

We use semantic CSS variables instead of hard-coding component colors. 
We keep the same semantic names in our light and dark themes, 
so we can switch themes without changing component APIs.

We group our core tokens into these families:

- Color: background, foreground, muted, border, primary, secondary, accent, destructive, success, warning, info
- Typography: display, heading, body, label, caption, font weights, line heights
- Spacing: our 0–24 semantic scale
- Radius: none, sm, md, lg, xl, 2xl, full
- Shadows: sm, md, lg, xl
- Motion: fast, normal, slow

## Our accessibility approach

We use native HTML semantics whenever practical, and we expose 
ARIA state or relationships when an interactive pattern needs them. 
We include focus-visible states in our base component styling
and we target WCAG AA contrast for our default themes.

## How we publish

We create a changeset for each publishable change:

```bash
pnpm changeset
```

We review the generated file, then run our release steps:

```bash
pnpm version-packages
pnpm install
pnpm release
```

When we publish through GitHub Actions, we configure `NPM_TOKEN` in the repository secrets.

## Our license

We release Prismwave UI under the MIT License. We include the full terms in [LICENSE](./LICENSE).
