# NIPAKK

TypeScript monorepo for nipakk, a Ninite inspired brew first package helper

## TECH STACK

- TypeScript (`Go` implementation, v7)
- Vite Plus (v0, see `vite.config.ts` and [VITE_PLUS](VITE_PLUS))
  - oxfmt
  - oxlint
  - tsgolint
  - pnpm (v10, see `pnpm-workspace.yaml`)
- mise

## QUICK REFERENCE

- Web feature: `apps/web/` (see `apps/web/AGENTS.md`)
- UI component: `packages/ui/` (see `packages/ui/AGENTS.md`)
- Conventions: see `docs/`

## COMMANDS

```bash
vp install          # Install dependencies, add `-w` for workspace and `-d` for dev dependencies
vp check --fix      # Lint and format (oxfmt, oxlint, tsgolint)
vp staged           # Run check against staged files
vp build            # Build production artifacts
vp preview          # Preview production build

# always add `run` to the following commands to trigger the package.json scripts over the built-ins
vp run dev          # Start development server (might already be running)
vp run typecheck    # TypeScript check (TSGO)
vp run clean        # Clean up repo from node_modules, purge cache and etc.
vp run ui:add       # Add new shadcn component to @nipakk/ui package
```

## DEVELOPMENT

- follow the baselines defined in `AGENTS.md` files ([Quick Reference](<AGENTS#Quick Reference>))
- follow the conventions defined in `[CONVENTION].md` files (see reference, [CONVENTIONS](AGENTS#CONVENTIONS))
- at the end of an AI workflow, simplify and verify the changes with `vp staged`

## CONVENTIONS

- For workspace (general, `pnpm-workspace.yaml`, `package.json`), see [WORKSPACE](WORKSPACE)
- For general code (all below), see [GENERAL_CODE](GENERAL_CODE)
- For TypeScript (`.ts`, `.tsx`, `.js`, `.jsx`), see [TYPESCRIPT](TYPESCRIPT)
- For TSX/React (`.tsx`), see [TSX_REACT](TSX_REACT)
- For Markdown (`.md`), see [MARKDOWN](MARKDOWN)
