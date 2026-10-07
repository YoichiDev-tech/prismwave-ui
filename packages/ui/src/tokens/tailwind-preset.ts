import type { Config } from 'tailwindcss';

const preset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        canvas: 'hsl(var(--pw-color-canvas) / <alpha-value>)',
        foreground: 'hsl(var(--pw-color-foreground) / <alpha-value>)',
        muted: 'hsl(var(--pw-color-muted) / <alpha-value>)',
        'muted-foreground': 'hsl(var(--pw-color-muted-foreground) / <alpha-value>)',
        border: 'hsl(var(--pw-color-border) / <alpha-value>)',
        input: 'hsl(var(--pw-color-input) / <alpha-value>)',
        primary: 'hsl(var(--pw-color-primary) / <alpha-value>)',
        'primary-foreground': 'hsl(var(--pw-color-primary-foreground) / <alpha-value>)',
        secondary: 'hsl(var(--pw-color-secondary) / <alpha-value>)',
        'secondary-foreground': 'hsl(var(--pw-color-secondary-foreground) / <alpha-value>)',
        accent: 'hsl(var(--pw-color-accent) / <alpha-value>)',
        'accent-foreground': 'hsl(var(--pw-color-accent-foreground) / <alpha-value>)',
        destructive: 'hsl(var(--pw-color-destructive) / <alpha-value>)',
        'destructive-foreground': 'hsl(var(--pw-color-destructive-foreground) / <alpha-value>)',
        success: 'hsl(var(--pw-color-success) / <alpha-value>)',
        warning: 'hsl(var(--pw-color-warning) / <alpha-value>)',
        info: 'hsl(var(--pw-color-info) / <alpha-value>)',
      },
      spacing: {
        '18': 'var(--pw-space-18)',
        '22': 'var(--pw-space-22)',
      },
      borderRadius: {
        pw: 'var(--pw-radius-md)',
        'pw-sm': 'var(--pw-radius-sm)',
        'pw-lg': 'var(--pw-radius-lg)',
        'pw-xl': 'var(--pw-radius-xl)',
      },
      boxShadow: {
        pw: 'var(--pw-shadow-md)',
        'pw-lg': 'var(--pw-shadow-lg)',
      },
      fontFamily: {
        sans: ['var(--pw-font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
};

export default preset;
