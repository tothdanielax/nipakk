import { GITHUB_URL, type Package } from '@/constants';

const groupByType = (packages: Package[]) => Object.groupBy(packages, (p) => p.type);

const toSorted = (pkgs: Package[], prefix: string) =>
  pkgs.map((p) => `${prefix} "${p.slug}"`).sort((a, b) => a.localeCompare(b));

export const generateBrewfile = (packages: Package[]) => {
  const { formulae = [], cask: casks = [] } = groupByType(packages);

  const formulaeLines = toSorted(formulae, 'brew');
  const caskLines = toSorted(casks, 'cask');

  const content: string[] = [`# Made with nipakk (${GITHUB_URL})`, ''];
  if (formulaeLines.length > 0) content.push('# Formulae', ...formulaeLines, '');
  if (caskLines.length > 0) content.push('# Casks', ...caskLines, '');

  return content.join('\n').trim();
};

export const generateBrewCommands = (packages: Package[]) => {
  if (packages.length === 0) return [];

  const { formulae = [], cask: casks = [] } = groupByType(packages);
  const commands: string[] = [];

  const formulaeSlugs = formulae.map((p) => p.slug).join(' ');
  const caskSlugs = casks.map((p) => p.slug).join(' ');

  if (formulaeSlugs) commands.push(`brew install ${formulaeSlugs}`);
  if (caskSlugs) commands.push(`brew install --cask ${caskSlugs}`);

  return commands;
};
