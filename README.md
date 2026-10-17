# Prismwave UI

An open-source, MIT-licensed React component library from [PrismWave Studio](https://github.com/YoichiDev-tech). Typed components, semantic design tokens, page layouts and a docs site, built with React, TypeScript and Tailwind CSS.

> **Status:** v0.1, early and evolving. Expect API changes before 1.0.

<!-- TODO: add a screenshot of the docs site and the live docs URL here -->

## Quick start

Install the published package when it is available on npm:

```bash
pnpm add @prismwave/ui
```

```tsx
import '@prismwave/ui/styles.css';
import { Button, Card } from '@prismwave/ui';
```

For local development before the first npm release, clone this repository and follow the workspace instructions below. Full usage, the Tailwind preset and the list of components are in the [package README](./packages/ui/README.md).

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
git clone https://github.com/YoichiDev-tech/prismwave-ui.git
cd prismwave-ui
pnpm install
pnpm dev            # starts the docs app
```

Before opening a pull request, format files and run the quality suite:

```bash
pnpm format
pnpm lint
pnpm test
pnpm build
```

CI checks formatting on changed files and runs lint, tests, production builds, and a packed-package consumer smoke test. The release workflow also validates builds on relevant pull requests.

See [CONTRIBUTING.md](./CONTRIBUTING.md) and [ARCHITECTURE.md](./ARCHITECTURE.md).

## Design system

Components use semantic CSS variables (background, foreground, primary, destructive and so on) instead of hard-coded colors. Light and dark themes share the same names, so switching themes never changes a component API. Token families: color, typography, spacing, radius, shadows and motion.

## Accessibility

Components start from native HTML semantics, add ARIA only where a pattern needs it, and ship visible focus styles. The default themes target WCAG AA contrast. Accessibility is a work in progress: if you find a gap, please open an issue.

## Releasing

Changes are versioned with [Changesets](https://github.com/changesets/changesets): run `pnpm changeset`, then `pnpm version-packages` and `pnpm release`. Publishing needs an `NPM_TOKEN` repository secret and only runs from `main`; pull requests never publish packages.

## License

[MIT](./LICENSE) © PrismWave Studio
