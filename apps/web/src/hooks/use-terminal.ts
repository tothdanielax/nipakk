import { useEffect } from 'react';
import { toast } from 'sonner';
import type { Package } from '@/constants';
import { generateBrewCommands, generateBrewfile } from '@/utils/brew';
import { downloadFile } from '@/utils/download-file';
import type { PackageFormHook } from './use-package-form';

export const useTerminal = (
  selectedPackages: Package[],
  withValidation: PackageFormHook['withValidation']
) => {
  const commands = generateBrewCommands(selectedPackages);

  const handleCopy = () =>
    void withValidation(async () => {
      await navigator.clipboard.writeText(commands.join(' && '));
      toast.success('Command copied to clipboard');
    });

  const handleDownload = () =>
    void withValidation(async () => {
      downloadFile('Brewfile', generateBrewfile(selectedPackages));
      toast.success('Brewfile downloaded');
    });

  useEffect(() => {
    const handleKeyDown = async (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'c') {
        const selection = window.getSelection()?.toString();
        if (!selection) {
          e.preventDefault();
          handleCopy();
        }
      }

      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        handleDownload();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleCopy, handleDownload]);

  return { commands, handleCopy, handleDownload };
};
