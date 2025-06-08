import { useEffect } from "react";

const usePlaybackTimer = ({
  isPaused,
  playbackStartRef,
  setCurrentPlaybackTime,
}) => {
  useEffect(() => {
    let rafId;

    const updateTime = () => {
      if (!isPaused && playbackStartRef.current !== null) {
        const elapsed = (performance.now() - playbackStartRef.current) / 1000;
        setCurrentPlaybackTime(elapsed);
        rafId = requestAnimationFrame(updateTime);
      }
    };

    if (!isPaused && playbackStartRef.current !== null) {
      rafId = requestAnimationFrame(updateTime);
    } else {
      // 🧪 Optional: remove this in production
      // console.log('⏸ Timer not started: paused or no playbackStartRef.');
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isPaused, playbackStartRef, setCurrentPlaybackTime]);
};

export default usePlaybackTimer;
