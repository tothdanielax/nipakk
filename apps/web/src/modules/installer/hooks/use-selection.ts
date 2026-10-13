import type { Package } from '@nipakk/core/catalog';
import { parseSelection, serializeSelection } from '@nipakk/core/selection';
import { useState } from 'react';
import { SELECTION_PARAM } from '@/constants';

export const useSelection = () => {
  const [selection, setSelection] = useState<readonly Package[]>(() =>
    parseSelection(new URLSearchParams(window.location.search).get(SELECTION_PARAM))
  );

  const togglePackage = (pkg: Package) => {
    const isSelected = selection.some((selected) => selected.slug === pkg.slug);
    const nextSelection = isSelected
      ? selection.filter((selected) => selected.slug !== pkg.slug)
      : [...selection, pkg];

    setSelection(nextSelection);
    window.history.replaceState(null, '', toShareUrl(nextSelection));
  };

  return { selection, togglePackage, shareUrl: toShareUrl(selection) };
};

const toShareUrl = (packages: readonly Package[]): string => {
  const url = new URL(window.location.href);
  url.search = '';
  if (packages.length > 0) url.searchParams.set(SELECTION_PARAM, serializeSelection(packages));
  // Commas are safe in a query, keep shared links readable.
  return url.href.replaceAll('%2C', ',');
};
