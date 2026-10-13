import { toBrewfile, toInstallCommand } from '@nipakk/core/brew';
import type { Package } from '@nipakk/core/catalog';
import { toast } from 'sonner';
import { BREWFILE_NAME, SHORTCUTS } from '@/constants';
import { useShortcut } from '@/hooks/use-shortcut';

const EMPTY_SELECTION_MESSAGE = 'select at least one package';

export const useBrewActions = (selection: readonly Package[], shareUrl: string) => {
  const command = toInstallCommand(selection);
  const isEmpty = selection.length === 0;

  useShortcut(SHORTCUTS.COPY_COMMAND, (event) => {
    if (window.getSelection()?.toString()) return;
    event.preventDefault();
    void copyCommand();
  });

  useShortcut(SHORTCUTS.SAVE_BREWFILE, (event) => {
    event.preventDefault();
    saveBrewfile();
  });

  const copyCommand = async () => {
    if (isEmpty) return void toast.error(EMPTY_SELECTION_MESSAGE);

    try {
      await navigator.clipboard.writeText(command);
      toast.success('command copied');
    } catch {
      toast.error('clipboard is not available, copy the command by hand');
    }
  };

  const saveBrewfile = () => {
    if (isEmpty) return void toast.error(EMPTY_SELECTION_MESSAGE);

    downloadText(BREWFILE_NAME, toBrewfile(selection, shareUrl));
    toast.success(`${BREWFILE_NAME} saved, run \`brew bundle\` next to it`);
  };

  return { command, copyCommand, saveBrewfile };
};

const downloadText = (filename: string, content: string) => {
  const url = URL.createObjectURL(new Blob([content], { type: 'text/plain' }));
  Object.assign(document.createElement('a'), { href: url, download: filename }).click();
  setTimeout(() => URL.revokeObjectURL(url));
};
