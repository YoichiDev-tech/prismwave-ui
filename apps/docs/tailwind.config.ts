import type { Config } from 'tailwindcss';
import prismwavePreset from '@prismwave/ui/tailwind';

export default {
  presets: [prismwavePreset],
  content: ['./index.html', './src/**/*.{ts,tsx}', '../../packages/ui/src/**/*.{ts,tsx}'],
} satisfies Config;
