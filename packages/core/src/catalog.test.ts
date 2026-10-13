import { describe, expect, it } from 'vite-plus/test';
import { CATALOG, PACKAGES } from './catalog';

// Homebrew token charset; anything else would be pasted into a shell.
const BREW_TOKEN = /^[a-z0-9][a-z0-9@._+-]*$/;

describe('CATALOG', () => {
  it('has unique slugs', () => {
    const slugs = PACKAGES.map((pkg) => pkg.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('has unique, non-empty categories', () => {
    expect(new Set(CATALOG.map((category) => category.name)).size).toBe(CATALOG.length);
    expect(CATALOG.filter((category) => category.packages.length === 0)).toEqual([]);
  });

  it('uses valid Homebrew tokens as slugs', () => {
    expect(PACKAGES.filter((pkg) => !BREW_TOKEN.test(pkg.slug))).toEqual([]);
  });

  it('ranks each category by installs', () => {
    const isRanked = CATALOG.every(({ packages }) =>
      packages.every((pkg, index) => index === 0 || packages[index - 1]!.installs >= pkg.installs)
    );
    expect(isRanked).toBe(true);
  });
});
