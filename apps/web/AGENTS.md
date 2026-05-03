# @NIPAKK/WEB

Frontend package.

## TECH STACK

- React (v19 with React Compiler)
- Vite (v7, see `./vite.config.ts`)
- Tailwind CSS (v4)
- Shadcn (v4, see `./components.json`)

## STRUCTURE

```bash
apps/portal/src/
├── modules/                   # Feature modules
│   └── <module>/
│       ├── index.tsx          # Module entry point
│       ├── components/        # Module-only components
│       ├── hooks/             # Module-only hooks
│       └── utils/             # Module-only utilities
├── components/                # Shared cross-module components
├── hooks/                     # Shared hooks
├── utils/                     # Shared utilities
└── layouts/                   # Layout wrappers
```

## WHERE TO LOOK

- Add shared component: `src/components/`
- Add shared hook: `src/hooks/`
- Add shared util: `src/utils/`
- Add module component: `src/modules/<module>/components/`
- Add module hook: `src/modules/<module>/hooks/`
- Add module util: `src/modules/<module>/utils/`

## CONVENTIONS

### MODULES

Modules are **self-contained**:

```bash
src/modules/host/
├── index.tsx               # Main module component/entry point
├── components/
│   └── package-form.tsx    # Module-only component
├── hooks/
│   └── use-package-form.ts # Form logic extracted
└── utils/
    └── validation.ts       # Module-only helpers
```

**RULE**: Modules CANNOT import from other modules. Shared code → `src/{folder}/` (e.g. components, hooks, utils) or `@nipakk/ui`.

## STYLING

- use `@nipakk/ui` for base components (e.g. `Button`, `Card`)
