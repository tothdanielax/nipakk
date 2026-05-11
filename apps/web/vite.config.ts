import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite-plus';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';

export default defineConfig({
  base: '/',

  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],

  build: {
    outDir: '../../dist',
    emptyOutDir: true,
    target: 'esnext'
  },

  resolve: {
    tsconfigPaths: true
  }
});
