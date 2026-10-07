# Prismwave UI

An open-source, MIT-licensed React component library from [PrismWave Studio](https://github.com/YoichiDev-tech). Typed components, semantic design tokens, page layouts and a docs site, built with React, TypeScript and Tailwind CSS.

> **Status:** v0.1, early and evolving. Expect API changes before 1.0.

<!-- TODO: add a screenshot of the docs site and the live docs URL here -->

## Quick start

```bash
pnpm add @prismwave/ui
```

```tsx
import '@prismwave/ui/styles.css';
import { Button, Card } from '@prismwave/ui';
```

Full usage, the Tailwind preset and the list of components are in the [package README](./packages/ui/README.md).

## Repository layout

```text
prismwave-ui/
├── apps/docs/        # Documentation and showcase app (Vite)
└── packages/ui/      # The publishable @prismwave/ui package
    └── src/
        ├── tokens/       # CSS variables and Tailwind preset
        ├── components/   # Reusable components
        ├── layouts/      # Page-level layouts
        ├── hooks/        # Small React hooks
        └── utils/        # Class and accessibility helpers
```

## Develop locally

Requires Node 22 and pnpm 10.

```bash
pnpm install
pnpm dev            # starts the docs app
```

Before opening a pull request:

```bash
pnpm format:check
pnpm lint
pnpm test
pnpm build
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) and [ARCHITECTURE.md](./ARCHITECTURE.md).

## Design system

Components use semantic CSS variables (background, foreground, primary, destructive and so on) instead of hard-coded colors. Light and dark themes share the same names, so switching themes never changes a component API. Token families: color, typography, spacing, radius, shadows and motion.

## Accessibility

Components start from native HTML semantics, add ARIA only where a pattern needs it, and ship visible focus styles. The default themes target WCAG AA contrast. Accessibility is a work in progress: if you find a gap, please open an issue.

## Releasing

Changes are versioned with [Changesets](https://github.com/changesets/changesets): run `pnpm changeset`, then `pnpm version-packages` and `pnpm release`. Publishing needs an `NPM_TOKEN` repository secret.

## License

[MIT](./LICENSE) © PrismWave Studio
