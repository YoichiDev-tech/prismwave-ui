import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export function useTheme(defaultTheme: Theme = 'system') {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return defaultTheme;
    return (localStorage.getItem('prismwave-theme') as Theme | null) ?? defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    const dark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    root.dataset.theme = dark ? 'dark' : 'light';
    root.classList.toggle('dark', dark);
    root.classList.toggle('light', !dark);
    localStorage.setItem('prismwave-theme', theme);
  }, [theme]);

  return { theme, setTheme };
}
