import "./NavBar.css";
import HomeBtn from "../NavBarIcons/HomeBtn/HomeBtn";
import PlayPauseBtn from "../NavBarIcons/PlayPauseBtn/PlayPauseBtn";
import RestartBtn from "../NavBarIcons/RestartBtn/RestartBtn";
import KeyBindLabelBtn from "../NavBarIcons/KeyBindLabelBtn/KeyBindLabelBtn";
import NoteLabelBtn from "../NavBarIcons/NoteLabelBtn/NoteLabelBtn";
import ColorToggleBtn from "../NavBarIcons/ColorToggleBtn/ColorToggleBtn";
import MidiListener from "../NavBarIcons/MidiListener/MidiListener";
import SongsBtn from "../NavBarIcons/SongsBtn/SongsBtn";
import { isMobile } from "react-device-detect";

const NavBar = ({
  songs,
  onKeyBindLabelClick,
  areKeyBindLabelsVisible,
  areColorsEnabled,
  onNoteColorClick,
  areNoteLabelsVisible,
  onLabelClick,
  onSongsMenuClick,
  disabled,
  onSongSelect,
  onRestartClick,
  isPaused,
  secondsLeft,
  onPauseClick,
  onSongsMenuOpen,
  isMenuOpen,
}) => {
  return (
    <nav className="game-nav">
      <HomeBtn className={"menu-icon"} />
      <PlayPauseBtn
        isPaused={isPaused}
        secondsLeft={secondsLeft}
        disabled={disabled}
        onPauseClick={onPauseClick}
      />
      <RestartBtn onRestartClick={onRestartClick} disabled={disabled} />
      <KeyBindLabelBtn
        areKeyBindLabelsVisible={areKeyBindLabelsVisible}
        onLabelClick={onKeyBindLabelClick}
      />
      <NoteLabelBtn
        areNoteLabelsVisible={areNoteLabelsVisible}
        onLabelClick={onLabelClick}
      />
      <ColorToggleBtn
        onNoteColorClick={onNoteColorClick}
        areColorsEnabled={areColorsEnabled}
      />
      <SongsBtn
        onSongsMenuClick={onSongsMenuClick}
        songs={songs}
        onSongSelect={onSongSelect}
        disabled={disabled}
        onSongsMenuOpen={onSongsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      {isMobile ? null : <MidiListener />}
    </nav>
  );
};

export default NavBar;
