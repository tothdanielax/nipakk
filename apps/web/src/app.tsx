import { DocsButton } from './components/buttons/docs-button';
import { GithubButton } from './components/buttons/github-button';
import { ThemeButton } from './components/buttons/theme-button';
import { PackageForm } from './components/package-form';
import { Terminal } from './components/terminal';
import { usePackageForm } from './hooks/use-package-form';
import { useTerminal } from './hooks/use-terminal';

export const App = () => {
  const { selectedPackages, togglePackage, withValidation } = usePackageForm();
  const { commands, handleCopy, handleDownload } = useTerminal(selectedPackages, withValidation);

  return (
    <main className='flex min-h-svh flex-col gap-8 p-6 select-none'>
      <section className='flex w-full flex-col items-start justify-between gap-4 lg:flex-row'>
        <div className='flex w-full items-center justify-between gap-2 lg:hidden'>
          <GithubButton />
          <ThemeButton />
        </div>

        <GithubButton className='hidden lg:inline-flex' />

        <Terminal commands={commands} onCopy={handleCopy} onDownload={handleDownload} />

        <div className='hidden gap-1 lg:flex'>
          <ThemeButton />
          <DocsButton />
        </div>
      </section>

      <PackageForm selectedPackages={selectedPackages} togglePackage={togglePackage} />
    </main>
  );
};
