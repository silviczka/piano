import "./NavBar.css";
import HomeBtn from "../NavBarIcons/HomeBtn/HomeBtn";
import PlayPauseBtn from "../NavBarIcons/PlayPauseBtn/PlayPauseBtn";
import RestartBtn from "../NavBarIcons/RestartBtn/RestartBtn";
import KeyBindLabelBtn from "../NavBarIcons/KeyBindLabelBtn/KeyBindLabelBtn";
import NoteLabelBtn from "../NavBarIcons/NoteLabelBtn/NoteLabelBtn";
import ColorToggleBtn from "../NavBarIcons/ColorToggleBtn/ColorToggleBtn";
import SongsMenu from "../NavBarIcons/SongsMenu/SongsMenu";
import MidiListener from "../NavBarIcons/MidiListener/MidiListener";

const NavBar = ({
  onKeyBindLabelClick,
  areKeyBindLabelsVisible,
  areColorsEnabled,
  onNoteColorClick,
  areNoteLabelsVisible,
  onLabelClick,
}) => {
  return (
    <nav className="game-nav">
      <HomeBtn className={"menu-icon"} />
      <PlayPauseBtn />
      <RestartBtn />
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
      <SongsMenu />
      <MidiListener />
    </nav>
  );
};

export default NavBar;
