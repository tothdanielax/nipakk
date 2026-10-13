import type { Kind, Package } from './catalog';

// Key order is output order: formulae first, like `brew bundle dump`.
const KINDS = {
  formula: { directive: 'brew', install: 'brew install' },
  cask: { directive: 'cask', install: 'brew install --cask' }
} as const satisfies Record<Kind, { directive: string; install: string }>;

export const toInstallCommand = (packages: readonly Package[]): string => {
  return groupByKind(packages)
    .map(([kind, slugs]) => `${KINDS[kind].install} ${slugs.join(' ')}`)
    .join(' && ');
};

export const toBrewfile = (packages: readonly Package[], sourceUrl: string): string => {
  const sections = groupByKind(packages).map(([kind, slugs]) =>
    slugs.map((slug) => `${KINDS[kind].directive} "${slug}"`).join('\n')
  );

  return `${[`# Made with nipakk: ${sourceUrl}`, ...sections].join('\n\n')}\n`;
};

const groupByKind = (packages: readonly Package[]): [Kind, string[]][] => {
  const kinds = Object.keys(KINDS) as Kind[];

  return kinds
    .map((kind): [Kind, string[]] => [
      kind,
      [...new Set(packages.filter((pkg) => pkg.kind === kind).map((pkg) => pkg.slug))].toSorted()
    ])
    .filter(([, slugs]) => slugs.length > 0);
};
