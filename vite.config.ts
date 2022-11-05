import plugin from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import { dependencies, peerDependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    plugin({
      jsxRuntime: 'classic',
    }),
    svgr(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      formats: ['es'],
      fileName: (ext) => `index.${ext}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), ...Object.keys(dependencies)],
    },
    target: 'esnext',
    sourcemap: true,
  },
  css: {
    modules: {
      generateScopedName(name, filename) {
        const classPrefix = filename
          .split('src/components/')[1] // part after "components/"
          .replace(/\/(?!.*\/).*$/, '') // replace part after last forwarding slash
          .replace(/\//g, '_') // replace all slashes with lower dash
          .split('.')[0]; // fallback for root components
        return `${classPrefix}__${name}`;
      },
    },
  },
});
