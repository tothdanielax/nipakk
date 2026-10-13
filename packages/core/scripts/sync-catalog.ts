import { writeFile } from 'node:fs/promises';
import type { Kind, Package } from '../src/catalog.ts';
import { CANDIDATES_PER_KIND, CATEGORIES, PACKAGES_PER_CATEGORY } from './catalog.config.ts';

const API_URL = 'https://formulae.brew.sh/api';
const OUTPUT_FILE = new URL('../src/catalog.gen.json', import.meta.url);

// Formulae count installs on request, so dependencies pulled in by other packages don't inflate them.
const SOURCES = {
  cask: { analytics: 'cask-install', list: 'cask', key: 'cask', id: 'token' },
  formula: { analytics: 'install-on-request', list: 'formula', key: 'formula', id: 'name' }
} as const;

type ApiAnalytics = { items: Record<string, string>[] };

// Only the field named by `SOURCES[kind].id` is read: casks key by `token`, formulae by `name`.
type ApiPackage = Record<'token' | 'name', string> & {
  desc: string | null;
  deprecated: boolean;
  disabled: boolean;
};

const fetchJson = async <T>(path: string): Promise<T> => {
  const response = await fetch(`${API_URL}/${path}.json`);
  if (!response.ok) throw new Error(`GET ${path} failed (${response.status})`);
  return (await response.json()) as T;
};

// Most installed first. Taps (`user/tap/name`) are skipped, they would break the generated command.
const fetchCandidates = async (kind: Kind): Promise<Package[]> => {
  const { analytics, list, key, id } = SOURCES[kind];
  const [ranking, packages] = await Promise.all([
    fetchJson<ApiAnalytics>(`analytics/${analytics}/365d`),
    fetchJson<ApiPackage[]>(list)
  ]);
  const bySlug = new Map(packages.map((pkg) => [pkg[id], pkg]));

  return ranking.items.slice(0, CANDIDATES_PER_KIND).flatMap((item) => {
    const slug = item[key]!;
    const pkg = bySlug.get(slug);
    if (!pkg?.desc || pkg.deprecated || pkg.disabled) return [];

    return {
      kind,
      slug,
      description: pkg.desc,
      installs: Number(item.count!.replaceAll(',', ''))
    };
  });
};

const candidates = (await Promise.all([fetchCandidates('cask'), fetchCandidates('formula')]))
  .flat()
  .toSorted((a, b) => b.installs - a.installs);

const catalog = CATEGORIES.map(({ name }) => ({ name, packages: [] as Package[] }));
// Versions, channels and app twins (`python@3.14`, `wezterm@nightly`, `emacs-app`) collapse into the most installed one.
const seen = new Set<string>();
for (const pkg of candidates) {
  const base = pkg.slug.replace(/@.*|-app$/, '');
  if (seen.has(base)) continue;
  seen.add(base);

  const index = CATEGORIES.findIndex(
    ({ kind, match }) => (kind ?? pkg.kind) === pkg.kind && match.test(pkg.description)
  );
  const packages = catalog[index]?.packages;
  if (packages && packages.length < PACKAGES_PER_CATEGORY) packages.push(pkg);
}

await writeFile(OUTPUT_FILE, `${JSON.stringify(catalog, null, 2)}\n`);
console.info(`Wrote ${catalog.length} categories to ${OUTPUT_FILE.pathname}`);
