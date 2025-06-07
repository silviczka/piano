import "./GameLogic.css";
import NavBar from "../UI/NavBarMenu/NavBar/NavBar";
import Keyboard from "../Piano/Keyboard/Keyboard";
import NotesAnimation from "../NotesAnimation/NotesAnimation";
import { useState } from "react";

const GameLogic = () => {
  const [areKeyBindLabelsVisible, setKeyBindLabelsVisible] = useState(true);
  const [showNoteColors, setShowNoteColors] = useState(true);
  const [areNoteLabelsVisible, setNoteLabelsVisible] = useState(true);

  const toggleKeyBindLabels = () => setKeyBindLabelsVisible((prev) => !prev);
  const toggleNoteColors = () => setShowNoteColors((prev) => !prev);
  const toggleLabels = () => setNoteLabelsVisible((prev) => !prev);

  return (
    <div className="game-page">
      <div className="game-header">
        <NavBar
          areKeyBindLabelsVisible={areKeyBindLabelsVisible}
          onKeyBindLabelClick={toggleKeyBindLabels}
          areColorsEnabled={showNoteColors}
          onNoteColorClick={toggleNoteColors}
          areNoteLabelsVisible={areNoteLabelsVisible}
          onLabelClick={toggleLabels}
        />
      </div>
      <NotesAnimation />
      <Keyboard
        areColorsVisible={showNoteColors}
        areKeyBindLabelsVisible={areKeyBindLabelsVisible}
        areNoteLabelsVisible={areNoteLabelsVisible}
      />
    </div>
  );
};

export default GameLogic;
