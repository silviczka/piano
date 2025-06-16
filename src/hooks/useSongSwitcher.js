import HandlesetLoadedSong from '../utils/handlesetLoadedSong';

const useSongSwitcher = ({
  setLoadedSong,
  setCurrentPlaybackTime,
  playbackStartRef,
  hasStartedRef,
  playSong,
  stopSong,
  setIsPaused,
  shouldAutoPlay = true,
  restartBtnClickedRef,
  setIsResuming,
  togglePause,
  mode,
}) => {
  const loadAndPlaySong = async (songName, songTracks) => {
    stopSong();
    setCurrentPlaybackTime(0);
    hasStartedRef.current = false;

    let newSong = null;

    const interceptSetLoadedSong = (songObj) => {
      setLoadedSong(songObj);
      newSong = songObj;
    };

    await HandlesetLoadedSong(songName, songTracks, interceptSetLoadedSong);

    if (newSong) {
      if (shouldAutoPlay) {
        playbackStartRef.current = performance.now();
        hasStartedRef.current = true;
        setIsPaused(false); // resume playback
        playSong(newSong, 0);
      } else {
        setIsPaused(true); // pause until user presses play
        if (restartBtnClickedRef.current) {
          togglePause();
        }
      }
    } else {
      console.error('Song failed to load.');
    }
  };

  return { loadAndPlaySong };
};

export default useSongSwitcher;
