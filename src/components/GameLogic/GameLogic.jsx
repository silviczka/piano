import './GameLogic.css';
import NavBar from '../UI/NavBarMenu/NavBar/NavBar';
import Keyboard from '../Piano/Keyboard/Keyboard';
import NotesAnimation from '../NotesAnimation/NotesAnimation';
import { HITZONE_CENTER_PCT } from '../constants/constants';
import loadSongList from '../../utils/loadSongList';
import { useState, useEffect } from 'react';
import './GameLogic.css';
import ScoreDetail from '../UI/ScoreDetail/ScoreDetail';
import SongDetail from '../UI/SongDetail/SongDetail';
import Timer from '../Timer/Timer';

const GameLogic = () => {
  const [notes, setNotes] = useState([]);
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
        />
        <ScoreDetail score={score} notesNum={loadedSong?.notes.length} />
      </div>

      <Timer
        totalTime={loadedSong?.totalTime}
        isPaused={isPaused}
        onSongCountDown={setsongTimeCountDown}
      />
      <NotesAnimation notes={notes} hitZoneCenter={hitZoneCenter} />
      <Keyboard
        areColorsVisible={showNoteColors}
        areKeyBindLabelsVisible={areKeyBindLabelsVisible}
        areNoteLabelsVisible={areNoteLabelsVisible}
      />
    </div>
  );
};

export default GameLogic;
