import { ArrowRightIcon } from '@heroicons/react/24/outline';

type CtalinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  label: string;
  href: string;
  variant?: 'button-light' | 'button-dark' | 'link-light' | 'link-dark' | 'strategy';
}

