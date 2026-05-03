import { Button } from '@nipakk/ui/components/button';
import { GITHUB_URL } from '@/constants';

type Props = {
  className?: string;
};

export const GithubButton = ({ className }: Props) => (
  <Button
    variant='outline'
    onClick={() => window.open(GITHUB_URL, '_blank')}
    aria-label='View on GitHub'
    className={className}
  >
    <img
      src={`${import.meta.env.BASE_URL}images/github.svg`}
      alt='GitHub logo'
      className='size-4'
    />
    View on GitHub
  </Button>
);
