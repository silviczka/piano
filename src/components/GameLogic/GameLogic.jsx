import './GameLogic.css';
import NavBar from '../UI/NavBarMenu/NavBar/NavBar';
import Keyboard from '../Piano/Keyboard/Keyboard';
import NotesAnimation from '../NotesAnimation/NotesAnimation';
import { HITZONE_CENTER_PCT, HIT_THRESHOLD } from '../../constants/constants';
import loadSongList from '../../utils/loadSongList';
import { useState, useEffect, useRef } from 'react';
import './GameLogic.css';
import ScoreDetail from '../UI/ScoreDetail/ScoreDetail';
import SongDetail from '../UI/SongDetail/SongDetail';
import OverlayScreens from '../UI/Overlays/OverlayScreens/OverlayScreens';
import Timer from '../Timer/Timer';
import useNoteCleanup from '../../hooks/useNoteCleanUp';
import useSongPlayer from '../../hooks/useSongPlayer';
import useSongSwitcher from '../../hooks/useSongSwitcher';
import usePlaybackTimer from '../../hooks/usePlaybackTimer';
import ScoreFeedback from '../UI/ScoreFeedback/ScoreFeedback';
import useNoteScoring from '../../hooks/useNoteScoring';

const GameLogic = () => {
  const [notes, setNotes] = useState([]);
  const noteRefs = useRef({});
  const resumeTimeoutRef = useRef(null);
  const [currentPlaybackTime, setCurrentPlaybackTime] = useState(0);
  const [hitZoneCenter, setHitZoneCenter] = useState(
    (window.innerWidth * HITZONE_CENTER_PCT) / 100,
  );
  const [areKeyBindLabelsVisible, setKeyBindLabelsVisible] = useState(true);
  const [showNoteColors, setShowNoteColors] = useState(true);
  const [notePositions, setNotePositions] = useState({});
  const playbackStartRef = useRef(null);
  const hasStartedRef = useRef(false);
  const [areNoteLabelsVisible, setNoteLabelsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(true);
  const [isResuming, setIsResuming] = useState(false);
  const [songList, setSongList] = useState([]);
  const [loadedSong, setLoadedSong] = useState(null);
  const [score, setScore] = useState(0);
  const [songTimeCountDown, setsongTimeCountDown] = useState(0);
  const [isRestarted, setIsRestarted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [feedback, setFeedback] = useState('');
  const [midiInput, setMidiInput] = useState(null);
  const [restartBtnClicked, setIsRestartedClicked] = useState(false);

  const toggleKeyBindLabels = () => setKeyBindLabelsVisible((prev) => !prev);
  const toggleNoteColors = () => setShowNoteColors((prev) => !prev);
  const toggleLabels = () => setNoteLabelsVisible((prev) => !prev);
  const toggleSongsMenuOpen = () => {
    setIsMenuOpen((prev) => {
      return !prev;
    });
    setIsPaused(true);
  };

  const restartBtnClickedRef = useRef(false);

  useEffect(() => {
    restartBtnClickedRef.current = restartBtnClicked;
  }, [restartBtnClicked]);

  const toggleSongsMenuOpenn = () => {
    setNotes([]);
    setIsMenuOpen((prev) => {
      return !prev;
    });
  };

  const togglePause = () => {
    if (songTimeCountDown === 0 && !isPaused) {
      handleRestart();
      return;
    }

    if (resumeTimeoutRef?.current) {
      clearTimeout(resumeTimeoutRef?.current);
    }

    if (isPaused || restartBtnClickedRef.current) {
      setIsRestartedClicked(false);
      setIsResuming(true);
      resumeTimeoutRef.current = setTimeout(() => {
        autoPlaySong();
        setIsPaused(false);
        setIsResuming(false);
        resumeTimeoutRef.current = null;
      }, 4000);
    } else {
      stopSong();
      setIsPaused(true);
    }
  };

  const { handleNoteCompletion } = useNoteCleanup({
    setNotes,
    setNotePositions,
    noteRefs,
    isPaused,
  });

  const updateNotePosition = (id, left) => {
    setNotePositions((prev) => ({ ...prev, [id]: left }));
  };

  usePlaybackTimer({
    isPaused,
    playbackStartRef,
    setCurrentPlaybackTime,
  });

  const { evaluateNoteHit } = useNoteScoring({
    notes,
    notePositions,
    hitZoneCenter,
    HIT_THRESHOLD,
    setNotes,
    setNotePositions,
    noteRefs,
    setScore,
    setFeedback,
  });

  const handleKeyInput = (note) => {
    evaluateNoteHit(note);
  };

  const handleSongsMenuClick = () => {
    if (!isPaused) togglePause();
  };

  useEffect(() => {
    loadSongList(setLoadedSong, setSongList);
  }, []);

  const handleSongSelect = (songName, songTrack) => {
    setNotes([]);
    handleRestart();
    loadAndPlaySong(songName, songTrack);
  };

  const handleRestartClick = () => {
    setIsRestartedClicked(true);
    handleSongSelect(loadedSong.name, loadedSong.notes);
  };

  const autoPlaySong = () => {
    if (!loadedSong) return;

    const now = performance.now();
    if (!hasStartedRef.current) {
      // First time starting — reset everything
      playbackStartRef.current = now;
      setCurrentPlaybackTime(0);
      hasStartedRef.current = true;
      // console.log("PlaybackStartRef before setting:", playbackStartRef.current);
      // console.log("Playing song at time:", currentPlaybackTime);
      playSong(loadedSong, 0);
    } else {
      // Resuming — offset playback start to preserve currentPlaybackTime
      playbackStartRef.current = now - currentPlaybackTime * 1000;
      // console.log("Resuming song from", currentPlaybackTime, "seconds");
      playSong(loadedSong, currentPlaybackTime);
    }
  };

  const handleRestart = () => {
    setsongTimeCountDown(loadedSong?.totalTime);
    setIsRestarted(true);
    // stopSong();
    setCurrentPlaybackTime(0);
    playbackStartRef.current = performance.now();
    hasStartedRef.current = false;
    if (isPaused) return;
    // autoPlaySong(); // optional: could let user click play manually instead
  };

  // Hook for playing/stopping songs
  const { playSong, stopSong } = useSongPlayer({
    setNotes,
  });

  const { loadAndPlaySong } = useSongSwitcher({
    setLoadedSong,
    setCurrentPlaybackTime,
    playbackStartRef,
    hasStartedRef,
    playSong,
    stopSong,
    setIsPaused,
    restartBtnClickedRef,
    setIsResuming,
    togglePause,
    shouldAutoPlay: false, //to be decided if we want rigth after song selection to autoplay it
  });
  useEffect(() => {
    const handleSpacePressed = (event) => {
      if (songTimeCountDown === 0 && !isPaused) {
        handleRestart();
        return;
      }

      if (isResuming) return;

      if (event.code === 'Space') {
        event.preventDefault();
        document.activeElement.blur();
        togglePause();
      }
    };
    window.addEventListener('keydown', handleSpacePressed);

    return () => {
      window.removeEventListener('keydown', handleSpacePressed);
    };
  }, [loadedSong, songTimeCountDown, isResuming, isPaused]);

  useEffect(() => {
    const handleScreenResize = () => {
      setHitZoneCenter((window.innerWidth * HITZONE_CENTER_PCT) / 100);
    };

    window.addEventListener('resize', handleScreenResize);
    return () => window.removeEventListener('resize', handleScreenResize);
  }, []);

  return (
    <div className="game-page">
      <div className="game-header">
        <SongDetail name={loadedSong?.name} time={songTimeCountDown} />
        <NavBar
          areKeyBindLabelsVisible={areKeyBindLabelsVisible}
          onKeyBindLabelClick={toggleKeyBindLabels}
          areColorsEnabled={showNoteColors}
          onNoteColorClick={toggleNoteColors}
          areNoteLabelsVisible={areNoteLabelsVisible}
          onLabelClick={toggleLabels}
          onSongsMenuClick={handleSongsMenuClick}
          disabled={isResuming}
          onSongSelect={handleSongSelect}
          songs={songList}
          onRestartClick={handleRestartClick}
          isPaused={isPaused}
          secondsLeft={songTimeCountDown}
          onPauseClick={togglePause}
          onSongsMenuOpen={toggleSongsMenuOpen}
          isMenuOpen={isMenuOpen}
          onMidiInput={setMidiInput}
        />
        <ScoreDetail score={score} />
      </div>

      <Timer
        totalTime={loadedSong?.totalTime}
        isPaused={isPaused}
        onSongCountDown={setsongTimeCountDown}
        isRestarted={isRestarted}
        onRestart={setIsRestarted}
      />
      <NotesAnimation
        notes={notes}
        handleNoteCompletion={handleNoteCompletion}
        updateNotePosition={updateNotePosition}
        noteRefs={noteRefs}
        hitZoneCenter={hitZoneCenter}
        currentPlaybackTime={currentPlaybackTime}
        isPaused={isPaused}
        isRestarted={isRestarted}
      />
      <Keyboard
        areColorsVisible={showNoteColors}
        areKeyBindLabelsVisible={areKeyBindLabelsVisible}
        areNoteLabelsVisible={areNoteLabelsVisible}
        onKeyInput={handleKeyInput}
        midiInput={midiInput}
      />
      <OverlayScreens
        isPaused={isPaused}
        isResuming={isResuming}
        songTimeCountDown={songTimeCountDown}
        score={score}
        onPauseClick={togglePause}
        onRestartClick={handleRestart}
        onSongsMenuOpen={toggleSongsMenuOpenn}
        notesNum={loadedSong?.notes.length}
        restartBtnClicked={restartBtnClicked}
      />
      <ScoreFeedback feedback={feedback} />
    </div>
  );
};

export default GameLogic;
