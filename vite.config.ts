import { defineConfig } from 'vite-plus';

export default defineConfig({
  run: {
    cache: true,
    enablePrePostScripts: true
  },

  lint: {
    ignorePatterns: ['**/*.gen.json'],
    options: {
      typeAware: true,
      typeCheck: true
    }
  },

  fmt: {
    ignorePatterns: ['**/*.gen.json'],
    trailingComma: 'none',
    singleQuote: true,
    jsxSingleQuote: true,
    sortTailwindcss: true
  },

  test: {
    include: ['**/*.test.{ts,tsx}'],
    passWithNoTests: true
  },

  staged: {
    '*': 'vp check --fix',
    '*.{js,jsx,ts,tsx}': () => 'vp run typecheck'
  }
});
