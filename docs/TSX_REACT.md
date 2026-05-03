# NIPAKK / TSX-REACT

Apply to TSX (`.tsx`) files

## CONVENTIONS

- don't use `use client` or server components
- use semantic `HTML` tags where appropriate (e.g. `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`)
- use `div` or `span` wrappers only if they have a function and if the parent/children styling can't solve it
- use colors in the following order: defined in `globals.css` (e.g. `bg-muted`) -> `Tailwind` colors (e.g. `bg-gray-200`) -> hex (e.g. `#f7fafc`)
- use interactive components (e.g. `Button`) for user interaction over non-interactive ones (e.g. `div` with `onClick`)
- use `:Props` over `FC` generics (e.g. `export const MyComponent = ({ prop1, prop2 }: Props) => {}`)
- use `Props` naming over `{ComponentName}Props` if not exported (e.g. `type Props = { prop1: string; prop2: number }`)
- don't export `Props` if not used elsewhere
- use named imports from `react` package (e.g. `import { useState } from 'react'`)
- use `Tailwind` classes over inline styles
- use `React` v19 features (`useContext` -> `use`, `forwardRef` -> `ref`), don't use `memo`, `useMemo`, `useCallback`
- `React` internal order: `useState` → `useRef` → hooks → `useEffect` -> other
- use the simplest state management possible (`useState` -> `useContext` -> `useReducer`)
- don't use `useEffect` if not necessary
- use `Heading` and `Paragraph` components from `@nipakk/ui/components/typography` for typography instead of custom styles
- use `cn()` helper from `@nipakk/ui/lib/utils` for conditional `className`-s (e.g. `cn(isActive ? 'flex' : 'hidden')`)
- group classes by functionality with `cn()` helper (e.g. `flex` classes in one row) when defining 10+ classes
- use the least amount of `className`-s possible
- use `flex` classes over `grid` ones for one-dimensional layouts
- avoid `absolute` positioning
