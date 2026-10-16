# Contributing to Prismwave UI

We appreciate every contribution to Prismwave UI. At PrismWave Studio, we welcome work that makes our library more useful, consistent, and accessible.

## How we develop

We install our workspace dependencies and start our documentation app with:

```bash
pnpm install
pnpm dev
```

Before opening a pull request, format files and run the quality suite:

```bash
pnpm format
pnpm lint
pnpm test
pnpm build
```

CI checks formatting on changed files, runs lint and unit tests, builds both the component library and documentation app, and verifies that the packed library can be installed and imported from a clean consumer project. The release workflow also runs its build validation on relevant pull requests; package publishing is restricted to pushes to `main` when `NPM_TOKEN` is configured.

## Our component conventions

We keep each component in its own folder and include:

- `Component.tsx`
- `Component.types.ts`
- `index.ts`
- `tests/Component.test.tsx`

We type public component props from native HTML attributes wherever practical. We prefer semantic HTML, controlled and uncontrolled support where useful, predictable keyboard behavior, and explicit focus states.

## How we use Changesets

We add a changeset for every user-facing library change. We run `pnpm changeset`, choose `@prismwave/ui`, select the appropriate semver bump, and describe our change.

## How we open pull requests

We include our motivation, implementation summary, testing performed, accessibility considerations, and screenshots for visual changes in each pull request.
