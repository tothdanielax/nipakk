import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite-plus';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';

export default defineConfig({
  // GitHub Pages serves the site from /<repo>/.
  base: process.env.NODE_ENV === 'production' ? '/nipakk/' : '/',

  plugins: [react(), babel({ presets: [reactCompilerPreset()] }), tailwindcss()],

  resolve: {
    tsconfigPaths: true
  }
});
