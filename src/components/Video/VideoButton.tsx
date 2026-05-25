import { cnb } from 'cnbuilder';
import { PlayIcon, PauseIcon } from '@heroicons/react/20/solid';
import * as styles from './Video.styles';

type VideoButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  /**
   * if isPause is true, the button is a pause button, otherwise it's a play button
   */
  isPause: boolean;
  disabled?: boolean;
}

export const VideoButton = ({
  isPause,
  disabled = false,
  className,
  ...props
}: VideoButtonProps) => {
  const Icon = isPause ? PauseIcon : PlayIcon;

  return (
    <button
      type="button"
      className={cnb(styles.videoButton, className)}
      aria-label={`${isPause ? 'Pause' : 'Play'} video`}
      disabled={disabled}
      {...props}
    >
      <Icon className={styles.icon(isPause)} />
    </button>
  );
};
