import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';
import { mdFrontmatter } from './vite-plugins/md-frontmatter';

export default defineConfig({
  plugins: [mdFrontmatter(), react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  ssr: {
    noExternal: ['react-router-dom'],
  },
});