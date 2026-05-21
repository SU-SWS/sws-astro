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
    <div className="relative">
      <video
        ref={videoRef}
        role="presentation"
        onPlay={onPlay}
        onPause={onPause}
        muted
        autoPlay
        loop
        playsInline
        poster={posterSrc}
        className={styles.video}
      >
        <source src={mp4Src} type="video/mp4" />
        {children}
      </video>
      <VideoButton
        isPause={isPlaying}
        onClick={toggleVideo}
        // Use aria-disabled instead of disabled so tab order is preserved
        aria-disabled={!isVideoInView}
      />
    </div>
  );
};
