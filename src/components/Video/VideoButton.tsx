import { cnb } from 'cnbuilder';
import { PlayIcon, PauseIcon } from '@heroicons/react/20/solid';
import * as styles from './Video.styles';

type VideoButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  /**
   * if isPause is true, the button is a pause button, otherwise it's a play button
   */
  isPause: boolean;
  svgTitle?: string;
}

export const VideoButton = ({
  isPause,
  svgTitle = `${isPause ? 'Pause' : 'Play'} video`,
  className,
  ...props
}: VideoButtonProps) => {
  const Icon = isPause ? PauseIcon : PlayIcon;

  return (
    <button
      type="button"
      className={cnb(styles.videoButton, className)}
      {...props}
    >
      <Icon
        aria-hidden={undefined}
        title={svgTitle}
        className={styles.icon(isPause)}
      />
    </button>
  );
};
