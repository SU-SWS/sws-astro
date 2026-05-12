import { cnb } from 'cnbuilder';
import { ArrowRightIcon, ArrowUpRightIcon } from '@heroicons/react/20/solid';
import * as styles from './CtaLink.styles';

type CtalinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: styles.CtaVariantType;
}

export const CtaLink = ({
  id,
  href,
  variant = 'button-dark',
  children,
  className,
  ...props
}: CtalinkProps) => {
  const renderIcon = variant !== 'strategy';
  const isExternalLink = href.startsWith('http');
  const Icon = isExternalLink ? ArrowUpRightIcon : ArrowRightIcon;

  return (
    <a
      {...props}
      id={id}
      href={href}
      className={cnb(styles.ctaVariants[variant], className)}
    >
      {children}
      {renderIcon &&
        <Icon className={styles.icon(isExternalLink)} />
      }
    </a>
  );
};
