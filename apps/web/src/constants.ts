export const REPO_URL = 'https://github.com/tothdanielax/nipakk';

// Also read by the inline script in index.html.
export const THEME_STORAGE_KEY = 'theme';

export const SELECTION_PARAM = 'packages';
export const BREWFILE_NAME = 'Brewfile';

export type Shortcut = {
  key: string;
  label: string;
  mod?: boolean;
};

export const SHORTCUTS = {
  TOGGLE_THEME: { key: 't', label: 'toggle theme' },
  COPY_COMMAND: { key: 'c', label: 'copy command', mod: true },
  SAVE_BREWFILE: { key: 's', label: 'save as Brewfile', mod: true }
} as const satisfies Record<string, Shortcut>;
