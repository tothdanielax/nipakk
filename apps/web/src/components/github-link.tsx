import { IconButton } from '@nipakk/ui/components/button';
import { REPO_URL } from '@/constants';

export const GithubLink = () => {
  return (
    <IconButton
      variant='outline'
      aria-label='view on github'
      tooltip='view on github'
      nativeButton={false}
      render={<a href={REPO_URL} target='_blank' rel='noreferrer' />}
      icon={
        <img
          src={`${import.meta.env.BASE_URL}images/github.svg`}
          alt=''
          className='size-4 dark:invert'
        />
      }
    />
  );
};
