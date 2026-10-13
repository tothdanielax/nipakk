import { describe, expect, it } from 'vite-plus/test';
import { PACKAGES } from './catalog';
import { parseSelection, serializeSelection } from './selection';

// The catalog is generated, so tests pick real slugs from it instead of naming packages.
const [a, b, c] = PACKAGES.map((pkg) => pkg.slug);

describe('parseSelection', () => {
  it('returns nothing for a missing or empty value', () => {
    expect(parseSelection(null)).toEqual([]);
    expect(parseSelection('')).toEqual([]);
  });

  it('resolves known slugs to catalog packages', () => {
    expect(parseSelection(`${a},${b}`).map((pkg) => pkg.slug)).toEqual([a, b]);
  });

  it('drops unknown slugs and shell payloads', () => {
    expect(parseSelection(`${a},nope,$(rm -rf ~),${b};curl x`).map((pkg) => pkg.slug)).toEqual([a]);
  });

  it('drops duplicates', () => {
    expect(parseSelection(`${a},${a}`)).toHaveLength(1);
  });

  it('round-trips a serialized selection', () => {
    const selection = parseSelection(`${a},${b},${c}`);
    expect(parseSelection(serializeSelection(selection))).toEqual(selection);
  });
});
