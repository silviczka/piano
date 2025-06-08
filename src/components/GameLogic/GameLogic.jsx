import "./GameLogic.css";
import NavBar from "../UI/NavBarMenu/NavBar/NavBar";
import Keyboard from "../Piano/Keyboard/Keyboard";
import NotesAnimation from "../NotesAnimation/NotesAnimation";
import { HITZONE_CENTER_PCT } from "../../constants/constants";
import loadSongList from "../../utils/loadSongList";
import { useState, useEffect, useRef } from "react";
import "./GameLogic.css";
import ScoreDetail from "../UI/ScoreDetail/ScoreDetail";
import SongDetail from "../UI/SongDetail/SongDetail";
import OverlayScreens from "../UI/Overlays/OverlayScreens/OverlayScreens";
import Timer from "../Timer/Timer";

const GameLogic = () => {
  const [notes, setNotes] = useState([]);
  const noteRefs = useRef({});
  const resumeTimeoutRef = useRef(null);

  const [hitZoneCenter, setHitZoneCenter] = useState(
    (window.innerWidth * HITZONE_CENTER_PCT) / 100,
  );
  const [areKeyBindLabelsVisible, setKeyBindLabelsVisible] = useState(true);
  const [showNoteColors, setShowNoteColors] = useState(true);
  const [areNoteLabelsVisible, setNoteLabelsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(true);
  const [isResuming, setIsResuming] = useState(false);
  const [songList, setSongList] = useState([]);
  const [loadedSong, setLoadedSong] = useState(null);
  const [score, setScore] = useState(0);
  const [songTimeCountDown, setsongTimeCountDown] = useState(0);

  const toggleKeyBindLabels = () => setKeyBindLabelsVisible((prev) => !prev);
  const toggleNoteColors = () => setShowNoteColors((prev) => !prev);
  const toggleLabels = () => setNoteLabelsVisible((prev) => !prev);

  const togglePause = () => {
    if (songTimeCountDown === 0 && !isPaused) {
      // RESTART
      return;
    }

    if (resumeTimeoutRef?.current) {
      clearTimeout(resumeTimeoutRef?.current);
    }

    if (isPaused) {
      setIsResuming(true);
      resumeTimeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsResuming(false);
        resumeTimeoutRef.current = null;
      }, 4000);
    } else {
      setIsPaused(true);
    }
  };

  const handleSongsMenuClick = () => {
    if (!isPaused) togglePause();
  };

  useEffect(() => {
    loadSongList(setLoadedSong, setSongList);
  }, []);

  const handleRestart = () => {};

  const handleSongSelect = (songName, songTrack) => {
    console.log(songName, songTrack);
  };

  useEffect(() => {
    const handleSpacePressed = (event) => {
      if (songTimeCountDown === 0 && !isPaused) {
        handleRestart();
        return;
      }

      if (isResuming) return;

      if (event.code === "Space") {
        event.preventDefault();
        document.activeElement.blur();
        togglePause();
      }
    };
    window.addEventListener("keydown", handleSpacePressed);

    return () => {
      window.removeEventListener("keydown", handleSpacePressed);
    };
  }, [loadedSong, songTimeCountDown, isResuming, isPaused]);

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
          onRestartClick={handleRestart}
          isPaused={isPaused}
          secondsLeft={songTimeCountDown}
          onPauseClick={togglePause}
        />
        <ScoreDetail score={score} notesNum={loadedSong?.notes.length} />
      </div>

      <Timer
        totalTime={loadedSong?.totalTime}
        isPaused={isPaused}
        onSongCountDown={setsongTimeCountDown}
      />
      <NotesAnimation
        notes={notes}
        hitZoneCenter={hitZoneCenter}
        noteRefs={noteRefs}
      />
      <Keyboard
        areColorsVisible={showNoteColors}
        areKeyBindLabelsVisible={areKeyBindLabelsVisible}
        areNoteLabelsVisible={areNoteLabelsVisible}
      />
      <OverlayScreens
        isPaused={isPaused}
        isResuming={isResuming}
        songTimeCountDown={songTimeCountDown}
        score={score}
        onPauseClick={togglePause}
        onRestartClick={handleRestart}
      />
    </div>
  );
};

export default GameLogic;
