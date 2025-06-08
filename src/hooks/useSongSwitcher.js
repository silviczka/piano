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
}) => {
  const loadAndPlaySong = async (songName, songTracks) => {
    console.log('Song selected:', songName, songTracks);

    stopSong();
    setCurrentPlaybackTime(0);
    hasStartedRef.current = false;

    let newSong = null;

    const interceptSetLoadedSong = (songObj) => {
      setLoadedSong(songObj);
      newSong = songObj;
    };

    await HandlesetLoadedSong(songName, songTracks, interceptSetLoadedSong);

    // if (newSong) {
    //   playbackStartRef.current = performance.now();
    //   hasStartedRef.current = true;
    //   setIsPaused(false);
    //   playSong(newSong, 0);
    // } else {
    //   console.error('Song failed to load.');
    // }

    if (newSong) {
      if (shouldAutoPlay) {
        playbackStartRef.current = performance.now();
        hasStartedRef.current = true;
        setIsPaused(false); // resume playback
        playSong(newSong, 0);
      } else {
        setIsPaused(true); // pause until user presses play
      }
    } else {
      console.error('Song failed to load.');
    }
  };

  return { loadAndPlaySong };
};

export default useSongSwitcher;
