# NIPAKK / GENERAL CODE

Apply to all kind of code files and configurations

## CONVENTIONS

- don't export and share code if not used elsewhere
- don't add unnecessary comments (-> prefer self-documenting code)
- don't do premature optimizations (-> prefer code readability)
- don't repeat yourself (-> prefer code reuse)
- don't over-abstact (-> prefer code clarity)
- don't leave logs in the code (e.g. `console.log`) except on error
- don't leave debug statements in the code (e.g. `debugger`)
- use constants over magic numbers (-> prefer code clarity) (e.g. `const MY_SPECIFIC_RATE = 0.4`)
- import constants from closest `constants.ts` file (-> prefer code locality) (e.g. `import { MY_SPECIFIC_RATE } from './constants'`)
- follow common principles (DRY, YAGNI, KISS, consistency..)
