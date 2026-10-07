# @prismwave/ui

Accessible React components, design tokens and page layouts built with Tailwind CSS and TypeScript.

> v0.x: the API is still evolving. Feedback and issues are welcome.

## Install

```bash
pnpm add @prismwave/ui
# or: npm install @prismwave/ui
```

Peer dependencies: `react` and `react-dom` >= 18.2.

## Usage

Import the stylesheet once, then use the components:

```tsx
import '@prismwave/ui/styles.css';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@prismwave/ui';

export function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get started</Button>
      </CardContent>
    </Card>
  );
}
```

## Tailwind preset

```ts
import prismwavePreset from '@prismwave/ui/tailwind';

export default {
  presets: [prismwavePreset],
  content: ['./src/**/*.{ts,tsx}', './node_modules/@prismwave/ui/dist/**/*.js'],
};
```

## What's included

- **Components:** Accordion, Badge, Button, Card, Checkbox, Dropdown, Input, Modal, Pagination, Select, Skeleton, Switch, Table, Tabs, Toast, Tooltip
- **Layouts:** AuthLayout, DashboardShell, MarketingPage, PageContainer, ResponsiveGrid, SettingsLayout
- **Hooks:** useClickOutside, useDisclosure, useMediaQuery, useTheme
- **Tokens:** semantic CSS variables with light and dark themes (`.dark` or `[data-theme="dark"]`)

## Links

- Repository: https://github.com/YoichiDev-tech/prismwave-ui
- Issues: https://github.com/YoichiDev-tech/prismwave-ui/issues

MIT © PrismWave Studio
