# NIPAKK / WORKSPACE

Apply to general workspace and `pnpm-workspace.yaml`, `package.json` files

## CONVENTIONS

- don't version packages
- don't create empty files or folders
- use kebab-case for file names (e.g. `my-file.ts`)
- use `workspace:` protocol in `package.json` for cross-package imports (e.g. `@nipakk/ui: workspace:*`)
- use `shortest` path imports
- use `pnpm-workspace.yaml` and `catalog:` protocol in `package.json` to use same versions across packages
- use `vp` always for managing dependencies (see [VITE_PLUS](VITE_PLUS))
- don't edit `pnpm-lock.yaml`, manage via `vp` commands, `package.json` and `pnpm-workspace.yaml`
- don't edit any file or folder content that is mentioned in `.gitignore`
- use `snake_case`-d, colon-delimited names for script names (e.g. `ui:add`)
- add `AGENTS.md` and a `package.json` with a `@nipakk/` prefix when creating a new package
