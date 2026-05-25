import { cnb } from 'cnbuilder';
import { StanfordLogo } from './StanfordLogo';
import * as styles from './LogoLockup.styles';

/**
 * Stanford Department Branding Component with the Stanford wordmark logo and department name.
 */
type LogoLockupProps = {
  text: string;
  line2?: string;
  isLink?: boolean;
  color?: styles.LogoTextColorType;
  className?: string;
}

export const LogoLockup = ({
  text,
  line2,
  isLink,
  color = 'default',
  className,
  ...rest
}: LogoLockupProps) => {
  const LockupContent = (
    <div className={styles.contentWrapper}>
      <StanfordLogo
        color={color === 'white' ? 'white' : 'cardinal-red'}
        isLink={false}
        className={cnb(styles.logo)}
      />
      <div className={cnb(styles.text, styles.textColors[color])}>
        {text}
        {line2 && <div className={styles.line2}>{line2}</div>}
      </div>
    </div>
  );

  if (isLink) {
    return (
      <a
        className={cnb(styles.root, className)}
        href="/"
        {...rest}
      >
        {LockupContent}
      </a>
    );
  }

  return (
    <div className={cnb(styles.root, className)} {...rest}>
      {LockupContent}
    </div>
  );
};
