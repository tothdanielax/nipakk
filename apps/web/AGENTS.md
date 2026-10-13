# @nipakk/web

Frontend package

## Tech Stack

- React (v19 with React Compiler)
- Vite (v8, see `./vite.config.ts`), static SPA build
- Tailwind CSS (v4)
- Shadcn (v4, see `./components.json`)

## Structure

```bash
apps/web/src/
├── modules/                   # Feature modules
│   └── installer/
│       ├── index.tsx          # Module entry point
│       ├── components/        # Module-only components
│       └── hooks/             # Module-only hooks
├── components/                # Shared cross-module components
├── hooks/                     # Shared hooks
├── constants.ts               # App config: URLs, storage keys, keyboard shortcuts
├── app.tsx                    # Layout
└── main.tsx                   # Entry, providers
```

## Conventions

- Modules CANNOT import from other modules. Shared code → `src/{folder}/` or `@nipakk/ui`
- No business rules here: catalog, brew output and selection parsing live in `@nipakk/core`
- Use `@nipakk/ui` for base components (e.g. `Button`, `Card`)
- Keyboard shortcuts are config: add one to `SHORTCUTS` in `constants.ts`, bind it with `useShortcut`, the help tooltip picks it up
- The selection lives in the URL (`?packages=a,b`). URLs are untrusted: parse them with `parseSelection`, never put raw URL values into a command
- The theme is a `.dark` class on `<html>`, applied before paint by the inline script in `index.html`
