import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react(), dts({ entryRoot: 'src', rollupTypes: false })],
  build: {
    lib: {
      entry: {
        index: resolve(packageRoot, 'src/index.ts'),
        tailwind: resolve(packageRoot, 'src/tailwind.ts'),
      },
      formats: ['es'],
      fileName: (_, entryName) => `${entryName}.js`,
      cssFileName: 'styles',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        assetFileNames: (asset) => asset.name === 'style.css' ? 'styles.css' : asset.name ?? 'asset',
      },
    },
  },
});
