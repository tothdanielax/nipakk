import type { Kind } from '../src/catalog.ts';

// Homebrew has no categories. `vpr catalog:sync` walks the most installed casks and formulae
// and files each one under the first category whose rule matches its description.

export const PACKAGES_PER_CATEGORY = 10;

// How deep into each analytics list to look, ordered by 365 day installs.
export const CANDIDATES_PER_KIND = 2000;

type Category = {
  name: string;
  match: RegExp;
  kind?: Kind;
};

// Order matters: a package lands in the first category that matches.
export const CATEGORIES: Category[] = [
  { name: 'browsers', kind: 'cask', match: /web browser|based browser/i },
  { name: 'terminals', kind: 'cask', match: /terminal emulator|based terminal/i },
  { name: 'ai', match: /\bAI\b|\bLLMs?\b|language models|coding agent|ChatGPT|Claude/i },
  {
    name: 'dev tools',
    kind: 'cask',
    match: /\bAPIs?\b|\bHTTP\b|database|SQL|\bgit\b|container|virtual machine|developer/i
  },
  { name: 'editors', match: /code editor|text editor|\bIDE\b|\bvim\b/i },
  {
    name: 'cloud',
    kind: 'formula',
    match: /AWS|Azure|Google Cloud|Kubernetes|Terraform|cloud|tunnel|deploy/i
  },
  {
    name: 'shell',
    kind: 'formula',
    match: /command interpreter|command-line shell|shell (extension|history)|\bprompt\b|\bzsh\b/i
  },
  { name: 'runtimes', kind: 'formula', match: /runtime (environment|for)|[a-z] language\b/i },
  {
    name: 'databases',
    kind: 'formula',
    match:
      /relational|key-value|database (system|management)|interface for SQLite|MongoDB (database|Atlas)/i
  },
  {
    name: 'cli',
    kind: 'formula',
    match: /command-line|\bCLI\b|terminal|replacement for|alternative to|fuzzy|grep|JSON|git/i
  },
  { name: 'messaging', kind: 'cask', match: /messag|chat|communication|email|meeting/i },
  {
    name: 'productivity',
    kind: 'cask',
    match: /password|notes|office|calendar|knowledge|organis|task|cloud storage|keystrokes/i
  },
  {
    name: 'menu bar & windows',
    kind: 'cask',
    match: /menu bar|resize windows|window peeking|alt-tab/i
  },
  {
    name: 'media',
    kind: 'cask',
    match: /media|music|video|audio|image|screenshot|streaming|graphics|3D/i
  },
  {
    name: 'system',
    kind: 'cask',
    match: /uninstall|archive|display|keyboard|mouse|scroll|monitor|sleep|charging|airdrop|clean/i
  }
];
