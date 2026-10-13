# AI Agent Guidelines for nipakk

This document helps AI coding assistants work on the **nipakk** repository.
CLAUDE.md points here for compatibility.

## Project Overview

**nipakk** is a Ninite inspired, brew first setup helper. Pick apps and tools, get one `brew install` command or a `Brewfile`. The selection lives in the URL, so a setup can be shared as a link.

### Tech Stack

- TypeScript: language
- React 19 + Vite (SPA, static build)
- Vite+ / Vite Plus (see `vite.config.ts`)
  - oxfmt: formatting
  - oxlint: linting
  - tsgolint: type checking
  - vitest: testing (`vp test`)
- Tailwind CSS (v4) + shadcn (v4, BaseUI)
- bun (workspaces in root `package.json`): package manager
- mise: environment management
- GitHub Pages: hosting (see `.github/workflows/`)

## Quick Reference

- Web app: `apps/web/` (see `apps/web/AGENTS.md`)
- Business logic and the package catalog: `packages/core/` (see `packages/core/AGENTS.md`)
- UI package: `packages/ui/` (see `packages/ui/AGENTS.md`)
- Change the catalog: edit the category rules in `packages/core/scripts/catalog.config.ts`, then `vpr catalog:sync`
- Conventions: see `docs/`

## Layers

- `packages/core`: pure TypeScript, no React, no DOM. The catalog and all Homebrew output live here
- `packages/ui`: generic shadcn components, no business logic
- `apps/web`: presentation, URL state and browser APIs (clipboard, download, shortcuts). Calls `packages/core`, never builds brew output itself

## Commands

vp has built-in toolchain commands and a separate task runner:

```bash
vp install           # Install dependencies, add `-w` for workspace and `-d` for dev dependencies
vp check --fix       # Lint and format (oxfmt, oxlint, tsgolint)
vp test              # Run tests
vp staged            # Run check against staged files

vp run build         # Run a package.json script or configured run task
vpr build            # Shorthand for vp run build
vpr dev              # Start development server (might already be running)
vpr typecheck        # TypeScript check
vpr catalog:sync     # Categorise the most installed packages, regenerate the catalog (network)
vpr clean            # Clean up repo from node_modules, purge cache and etc.
vpr ui:add           # Add new shadcn component to @nipakk/ui package
```

Important distinctions:

- vp test is a built-in command. vp run test runs a package.json script or vite.config.ts run task named test.
- A task name can come from package.json or vite.config.ts, but not both.

## Conventions and standards

Follow the conventions defined in `docs/[convention].md` files, if not asked otherwise.

- Workspace
  - Changes to: `package.json`, `vite.config.ts`, other general configuration
  - Reference: [workspace](docs/workspace.md)
- TypeScript
  - Changes to: `.ts`, `.tsx`, `.js`, `.jsx`
  - Reference: [typescript](docs/typescript.md)
- TSX/React
  - Changes to: `.tsx`
  - Reference: [react](docs/react.md)
- Testing
  - Changes to: `.test.ts`, `packages/core`
  - Reference: [testing](docs/testing.md)
- CSS
  - Changes to: `.css`
  - Reference: [css](docs/css.md)
- Markdown
  - Changes to: `.md`
  - Reference: [markdown](docs/markdown.md)
- Git
  - Changes to: commits, branches, pull requests
  - Reference: [git](docs/git.md)
