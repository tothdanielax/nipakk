# Testing

## Scope

- Test business logic in `packages/core` (Brewfile and command generation, selection parsing, catalog invariants)
- Don't unit test straightforward functions, one-line wrappers, type mappers or simple transforms
- Don't test UI components unless they hold logic that can't live in `packages/core`

## Requirements

- Test positive and negative paths (empty selection, unknown slug, mixed kinds)
- Test edge cases: empty inputs, duplicates, malformed input
- Assert observable behavior only (input to output), never internal helpers or call order
- Use explicit assertions, no snapshot tests
- Never hit real endpoints in tests, Homebrew data is fetched only by `vpr catalog:sync`

## Style

- One behavior per `it` block, no shared mutable state
- Group `describe` blocks by the unit under test
- Put test files next to the logic (`brew.ts` and `brew.test.ts`)
- Import test helpers from `vite-plus/test`
