# NIPAKK / TYPESCRIPT

Apply to `.ts`, `.tsx`. `.js` and `.jsx` files

## CONVENTIONS

- use named imports over default ones (e.g. `import { useState } from 'react'`)
- use named export over `default` ones (e.g. `export const MyComponent = () => {}`)
- don't create `.d.ts` files, define types in `.ts` files only
- use `type` over `interface` for type syntax (e.g. `type MyType = {}`)
- use `PascalCase` for type casing
- use `unknown` over `any` as fallback (but use fallback as last resort)
- use `const` objects with `as const` annotation over `enum` (e.g. `const MY_ENUM = { MY_VALUE: 'MY_VALUE' } as const`)
- use `SCREAMING_SNAKE_CASE` for enum casing
- use functional `React` over classes (e.g. `const MyComponent = () => {}`)
- use `PascalCase` for component names (e.g. `MyComponent`)
- use implicit returns over explicit returns (e.g. `const myFunction = () => { return 1 }`)
- use arrow functions over function declarations
- match the exported function's name when creating a new file (e.g. content: `export const MyComponent = () => {}`, filename: `my-component.tsx`)
