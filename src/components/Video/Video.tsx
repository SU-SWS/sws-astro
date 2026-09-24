import { cnb } from 'cnbuilder';
import { VideoButton } from './VideoButton';
import { useVideoControl } from '@utilities/hooks/useVideoControl';
import * as styles from './Video.styles';

export type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  mp4Src: string;
  posterSrc?: string;
}

export const Video = ({
  mp4Src,
  posterSrc,
  children,
  className,
}: VideoProps) => {
  // Video control using custom hook
  const {
    videoRef,
    isPlaying,
    toggleVideo,
    isVideoInView,
    onPlay,
    onPause,
  } = useVideoControl();

  return (
    <div className={cnb('relative', className)}>
      <video
        ref={videoRef}
        onPlay={onPlay}
        onPause={onPause}
        muted
        // No autoPlay: useVideoControl starts playback once the video is in view (and not
        // under reduced motion), so nothing downloads until then.
        preload="none"
        loop
        playsInline
        poster={posterSrc}
        aria-hidden="true"
        className={styles.video}
      >
        <source src={mp4Src} type="video/mp4" />
        {children}
      </video>
      <VideoButton
        isPause={isPlaying}
        onClick={toggleVideo}
        disabled={!isVideoInView}
      />
    </div>
  );
};
