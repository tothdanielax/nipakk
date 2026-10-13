import { Heading } from '@nipakk/ui/components/heading';
import { AboutInfo } from '@/components/about-info';
import { GithubLink } from '@/components/github-link';
import { ShortcutsHelp } from '@/components/shortcuts-help';
import { ThemeToggle } from '@/components/theme-toggle';
import { Installer } from '@/modules/installer';

export const App = () => {
  return (
    <div className='flex min-h-svh flex-col gap-8 p-6 select-none'>
      <header className='flex items-center justify-between'>
        <nav className='flex gap-1'>
          <GithubLink />
          <AboutInfo />
        </nav>
        <Heading as='h1' className='sr-only'>
          nipakk - brew first setup helper
        </Heading>
        <nav className='flex gap-1'>
          <ThemeToggle />
          <ShortcutsHelp />
        </nav>
      </header>
      <main className='flex flex-col items-center gap-8'>
        <Installer />
      </main>
    </div>
  );
};
