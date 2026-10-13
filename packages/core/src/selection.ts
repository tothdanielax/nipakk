import { PACKAGES, type Package } from './catalog';

const SEPARATOR = ',';
const PACKAGES_BY_SLUG = new Map(PACKAGES.map((pkg) => [pkg.slug, pkg]));

// The value comes from a shared URL and ends up in a pasted shell command:
// only slugs known to the catalog survive.
export const parseSelection = (value: string | null): Package[] => {
  if (!value) return [];
  return [...new Set(value.split(SEPARATOR))].flatMap((slug) => PACKAGES_BY_SLUG.get(slug) ?? []);
};

export const serializeSelection = (packages: readonly Package[]): string => {
  return packages.map((pkg) => pkg.slug).join(SEPARATOR);
};
