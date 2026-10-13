import { IconButton } from '@nipakk/ui/components/button';
import { Paragraph } from '@nipakk/ui/components/paragraph';
import { InfoIcon } from 'lucide-react';

export const AboutInfo = () => {
  return (
    <IconButton
      variant='outline'
      className='cursor-help'
      aria-label='how it works'
      icon={<InfoIcon />}
      tooltip={
        <div className='space-y-2'>
          <Paragraph size='xs'>
            Pick packages, then copy one brew install command or save a Brewfile. The selection
            lives in the URL, so a setup can be shared as a link.
          </Paragraph>
          <Paragraph size='xs'>
            Packages come from Homebrew's yearly install analytics: the most installed casks and
            formulae are sorted into categories by their description, most installed first.
          </Paragraph>
          <Paragraph size='xs'>
            A weekly job refreshes the list, so it follows what people use.
          </Paragraph>
        </div>
      }
    />
  );
};
