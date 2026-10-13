import { PackagePicker } from './components/package-picker';
import { Terminal } from './components/terminal';
import { useBrewActions } from './hooks/use-brew-actions';
import { useSelection } from './hooks/use-selection';

export const Installer = () => {
  const { selection, togglePackage, shareUrl } = useSelection();
  const { command, copyCommand, saveBrewfile } = useBrewActions(selection, shareUrl);

  return (
    <>
      <Terminal command={command} onCopy={copyCommand} onSave={saveBrewfile} />
      <PackagePicker selection={selection} onToggle={togglePackage} />
    </>
  );
};
