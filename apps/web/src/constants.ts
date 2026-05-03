import type { LucideIcon } from 'lucide-react';
import { MoonIcon, SunIcon, MonitorIcon } from 'lucide-react';

export const THEME_VALUES = ['dark', 'light', 'system'] as const;
export type Theme = (typeof THEME_VALUES)[number];
export type ResolvedTheme = Exclude<Theme, 'system'>;

export const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';
export const DEFAULT_THEME: Theme = 'system';
export const THEME_STORAGE_KEY = 'theme';

export const THEME_ICON = {
  dark: MoonIcon,
  light: SunIcon,
  system: MonitorIcon
} as const satisfies Record<Theme, LucideIcon>;

export const MAX_COLUMN_SIZE = 8;

export const GITHUB_URL = 'https://github.com/tothdanielax/nipakk';

export const PACKAGE_TYPE = {
  CODE_EDITOR: 'CODE_EDITOR',
  TERMINAL: 'TERMINAL',
  AI_AGENT: 'AI_AGENT',
  DEVELOPMENT_TOOL: 'DEVELOPMENT_TOOL',
  BROWSER: 'BROWSER',
  MESSAGING: 'MESSAGING',
  UTILITIES: 'UTILITIES'
} as const satisfies Record<string, string>;
type PackageType = keyof typeof PACKAGE_TYPE;

export type Package = {
  type: 'cask' | 'formulae';
  description: string;
  slug: string;
  name?: string;
};

export const PACKAGES = {
  [PACKAGE_TYPE.BROWSER]: [
    {
      type: 'cask',
      description: 'Lightweight Chromium browser with minimal UI',
      name: 'helium',
      slug: 'helium-browser'
    },
    {
      type: 'cask',
      description: "Google's cross-platform web browser",
      slug: 'google-chrome'
    },
    {
      type: 'cask',
      description: "Mozilla's open-source, privacy-focused browser",
      slug: 'firefox'
    },
    {
      type: 'cask',
      description: 'Chromium browser with built-in ad blocking',
      name: 'brave',
      slug: 'brave-browser'
    },
    {
      type: 'cask',
      description: 'Firefox-based browser with vertical tabs and workspaces',
      slug: 'zen'
    }
  ],
  [PACKAGE_TYPE.CODE_EDITOR]: [
    {
      type: 'cask',
      description: 'High-performance editor with built-in collaboration',
      slug: 'zed'
    },
    {
      type: 'cask',
      description: 'AI-first code editor',
      slug: 'cursor'
    },
    {
      type: 'cask',
      description: "Microsoft's open-source code editor",
      name: 'vscode',
      slug: 'visual-studio-code'
    },
    {
      type: 'cask',
      description: 'JetBrains IDE for web development',
      slug: 'webstorm'
    },
    {
      type: 'formulae',
      description: 'Modal text editor',
      slug: 'vim'
    }
  ],
  [PACKAGE_TYPE.TERMINAL]: [
    {
      type: 'cask',
      description: 'GPU-accelerated, native-UI terminal emulator',
      slug: 'ghostty'
    },
    {
      type: 'cask',
      description: 'Terminal replacement',
      slug: 'iterm2'
    },
    {
      type: 'cask',
      description: 'Fast GPU-rendered terminal emulator',
      slug: 'kitty'
    },
    {
      type: 'cask',
      description: 'Modern terminal with AI assistance',
      slug: 'warp'
    }
  ],
  [PACKAGE_TYPE.AI_AGENT]: [
    {
      type: 'cask',
      description: "Anthropic's terminal-based AI coding assistant",
      name: 'claude',
      slug: 'claude-code'
    },
    {
      type: 'cask',
      description: "OpenAI's terminal-based coding agent",
      slug: 'codex'
    },
    {
      type: 'cask',
      description: 'Command-line interface from Cursor',
      slug: 'cursor-cli'
    }
  ],
  [PACKAGE_TYPE.DEVELOPMENT_TOOL]: [
    {
      type: 'cask',
      description: 'Git client with parallel and stacked branch support',
      slug: 'gitbutler'
    },
    {
      type: 'cask',
      description: 'Simple database GUI',
      slug: 'tableplus'
    },
    {
      type: 'cask',
      description: 'Lightweight Docker Desktop alternative',
      slug: 'orbstack'
    },
    {
      type: 'formulae',
      description: 'Container runtime engine',
      slug: 'docker'
    },
    {
      type: 'formulae',
      description: 'Runtime version manager',
      slug: 'mise'
    },
    {
      type: 'formulae',
      description: 'Node version manager',
      slug: 'nvm'
    },
    {
      type: 'formulae',
      description: 'Infrastructure as code tool',
      slug: 'terraform'
    }
  ],
  [PACKAGE_TYPE.MESSAGING]: [
    {
      type: 'cask',
      description: 'Team messaging and collaboration platform',
      slug: 'slack'
    },
    {
      type: 'cask',
      description: 'Voice, video, and text communication app',
      slug: 'discord'
    },
    {
      type: 'cask',
      description: "Microsoft's team communication and meeting platform",
      slug: 'microsoft-teams'
    },
    {
      type: 'cask',
      description: 'Video communication and virtual meeting platform',
      slug: 'zoom'
    }
  ],
  [PACKAGE_TYPE.UTILITIES]: [
    {
      type: 'cask',
      description: 'Spotlight alternative',
      slug: 'alfred'
    },
    {
      type: 'cask',
      description: 'Display resolution and scaling manager',
      slug: 'betterdisplay'
    },
    {
      type: 'cask',
      description: 'Screenshot and screen recording tool',
      slug: 'cleanshot'
    },
    {
      type: 'cask',
      description: 'Modern open-source media player',
      slug: 'iina'
    },
    {
      type: 'cask',
      description: 'Mouse scroll smoothing, inversion and direction control',
      slug: 'mos'
    },
    {
      type: 'cask',
      description: 'Spotlight alternative',
      slug: 'raycast'
    },
    {
      type: 'cask',
      description: 'App subscription service',
      slug: 'setapp'
    },
    {
      type: 'cask',
      description: 'Lightweight screenshot tool',
      slug: 'shottr'
    },
    {
      type: 'cask',
      description: 'Lightweight, open-source BitTorrent client',
      slug: 'transmission'
    },
    {
      type: 'cask',
      description: 'Free, open-source multimedia player',
      slug: 'vlc'
    }
  ]
} as const satisfies Record<PackageType, Package[]>;

export const KEYBOARD_SHORTCUTS = {
  THEME_TOGGLE: {
    label: 'Theme switch',
    shortcuts: ['t']
  },
  COPY_COMMAND: {
    label: 'Copy command',
    shortcuts: ['⌘', 'c']
  },
  SAVE_AS_BREWFILE: {
    label: 'Save as Brewfile',
    shortcuts: ['⌘', 's']
  }
} as const satisfies Record<string, { label: string; shortcuts: string[] }>;
