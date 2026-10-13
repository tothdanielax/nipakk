import { describe, expect, it } from 'vite-plus/test';
import { toBrewfile, toInstallCommand } from './brew';
import type { Package } from './catalog';

const ZED: Package = { kind: 'cask', slug: 'zed', description: '', installs: 0 };
const GHOSTTY: Package = {
  kind: 'cask',
  slug: 'ghostty',
  description: '',
  installs: 0
};
const MISE: Package = { kind: 'formula', slug: 'mise', description: '', installs: 0 };
const GH: Package = { kind: 'formula', slug: 'gh', description: '', installs: 0 };

describe('toInstallCommand', () => {
  it('returns an empty command for no packages', () => {
    expect(toInstallCommand([])).toBe('');
  });

  it('installs formulae before casks, each sorted', () => {
    expect(toInstallCommand([ZED, MISE, GHOSTTY, GH])).toBe(
      'brew install gh mise && brew install --cask ghostty zed'
    );
  });

  it('skips a kind with no packages', () => {
    expect(toInstallCommand([ZED])).toBe('brew install --cask zed');
  });

  it('lists a duplicate slug once', () => {
    expect(toInstallCommand([MISE, MISE])).toBe('brew install mise');
  });
});

describe('toBrewfile', () => {
  it('writes a header, then formulae and casks as separate sections', () => {
    expect(toBrewfile([ZED, MISE, GH], 'https://example.com')).toBe(
      '# Made with nipakk: https://example.com\n\nbrew "gh"\nbrew "mise"\n\ncask "zed"\n'
    );
  });

  it('writes only the header for no packages', () => {
    expect(toBrewfile([], 'https://example.com')).toBe('# Made with nipakk: https://example.com\n');
  });
});
