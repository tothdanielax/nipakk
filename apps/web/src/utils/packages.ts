import { MAX_COLUMN_SIZE, type Package } from '@/constants';

const splitGroup = (category: string, items: readonly Package[]): [string, Package[]][] => {
  const sorted = [...items].sort((a, b) => (a.name ?? a.slug).localeCompare(b.name ?? b.slug));
  if (sorted.length <= MAX_COLUMN_SIZE) return [[category, sorted]];

  const numChunks = Math.ceil(sorted.length / MAX_COLUMN_SIZE);
  const chunkSize = Math.ceil(sorted.length / numChunks);

  return Array.from({ length: numChunks }, (_, i) => [
    `${category} (${i + 1})`,
    sorted.slice(i * chunkSize, (i + 1) * chunkSize)
  ]);
};

export const splitPackages = (packages: {
  [key: string]: readonly Package[];
}): [string, Package[]][] =>
  Object.entries(packages)
    .flatMap(([category, items]) => splitGroup(category, items))
    .sort((a, b) => a[0].localeCompare(b[0]));
