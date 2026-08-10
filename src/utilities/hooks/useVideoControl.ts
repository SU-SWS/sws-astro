import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';

/**
 * Custom hook to manage video play/pause state with automatic play/pause based on viewport visibility.
 *
 * Features:
 * - Auto-plays video when it enters the viewport
 * - Auto-pauses video when it exits the viewport
 * - Remembers user's manual pause state to prevent auto-play after manual pause
 * - Provides toggle function for manual play/pause control
 * - Never auto-plays when the user prefers reduced motion; manual playback still works
 *
 * @param viewThreshold - A number < 1. The amount of the video that must be visible to trigger auto-play (default: 0.1)
 * @returns Object containing video ref, playing state, user paused state, and toggle function
 */
export const useVideoControl = (viewThreshold?: number) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoRef, { once: false, amount: viewThreshold ?? 0.1 });
  const prefersReducedMotion = useReducedMotion();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isUserPaused, setIsUserPaused] = useState<boolean>(false);

  /**
   * Toggle video play/pause state manually.
   * The video element is the source of truth; isPlaying is updated by its play/pause events.
   */
  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      setIsUserPaused(false);
      video.play().catch(() => {
        // Silently handle autoplay restrictions
      });
    } else {
      setIsUserPaused(true);
      video.pause();
    }
  };

  /**
   * Pause video when it goes out of viewport,
   * resume when it comes back into view if it was not manually paused by the user.
   *
   * Leaving the viewport always pauses, including under reduced motion — a video the user
   * started manually should not keep playing off-screen. Only the auto-play half is gated,
   * so re-entering the viewport never starts playback for those users.
   */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!isVideoInView) {
      video.pause();
      return;
    }

    if (!prefersReducedMotion && !isUserPaused) {
      video.play().catch(() => {
        // Silently handle autoplay restrictions
      });
    }
  }, [isVideoInView, isUserPaused, prefersReducedMotion]);

  /**
   * useReducedMotion() returns false during SSR, so the autoPlay attribute is present
   * in the static HTML and playback may begin before hydration. Defensively stop it.
   * Keyed only on prefersReducedMotion so it never re-runs and cancels manual playback.
   */
  useEffect(() => {
    if (prefersReducedMotion) {
      videoRef.current?.pause();
    }
  }, [prefersReducedMotion]);

  return {
    videoRef,
    isPlaying,
    isUserPaused,
    isVideoInView,
    prefersReducedMotion,
    toggleVideo,
    onPlay: () => setIsPlaying(true),
    onPause: () => setIsPlaying(false),
  };
};
