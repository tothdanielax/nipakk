# nipakk

Ninite inspired, brew first setup helper <https://tothdanielax.github.io/nipakk/>

## Usage

Requires [Homebrew](https://docs.brew.sh/Installation).

1. Select the packages you want
2. Copy the `brew install` command (`⌘ c`) or save a `Brewfile` (`⌘ s`) and run `brew bundle`
3. Share your setup: the selection is part of the URL

## Development

```bash
mise install
vp install
vpr dev
```

The catalog is generated from Homebrew install analytics: edit the category rules in `packages/core/scripts/catalog.config.ts` and run `vpr catalog:sync`. See `AGENTS.md` for structure and conventions.
