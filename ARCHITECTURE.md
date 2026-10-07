# How we build Prismwave UI

## Our package boundary

We publish `packages/ui` as our only package. We expose the package root, `styles.css`, and our Tailwind preset as public entry points. We export components through small folders so ESM-aware bundlers can remove unused modules.

## Our token system

We use semantic HSL CSS variables so our component APIs do not depend on raw palette values. We set light as our default theme, and we switch the same semantic variables to our dark palette with `.dark` or `[data-theme="dark"]`.

We organize our token layers as:

1. Primitive scale values for our spacing, radius, shadows, and typography
2. Semantic color roles for our surfaces, text, borders, actions, and status
3. Tailwind aliases that point to our semantic variables
4. Components that consume our semantic Tailwind classes

## Our component API

We use native HTML props wherever practical, and we support `className` throughout our library. We use `class-variance-authority` and `cn()` for variant-heavy components so our consumers can compose classes while we preserve Tailwind conflict resolution.

## Our documentation

We keep our documentation application data-driven. We define each component's title, description, prop inventory, variants, usage snippet, and accessibility note in its metadata, while we use actual package exports in our previews. We use this approach to make our showcase both documentation and a visual smoke test.

## Our release flow

We use Changesets to manage our semver decisions. We validate lint, tests, and builds in CI. Our release workflow uses the npm token to publish `@prismwave/ui`, while our Vercel configuration builds only `apps/docs`.
