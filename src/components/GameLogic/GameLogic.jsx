import "./GameLogic.css";
import NavBar from "../UI/NavBarMenu/NavBar/NavBar";
import Keyboard from "../Piano/Keyboard/Keyboard";
import usePCKeyHandlers from "../../hooks/usePCKeyHandlers";
import NotesAnimation from "../NotesAnimation/NotesAnimation";
import { useState } from "react";

const GameLogic = () => {
  const [areKeyBindLabelsVisible, setKeyBindLabelsVisible] = useState(true);
  const toggleKeyBindLabels = () => setKeyBindLabelsVisible((prev) => !prev);

  const handleKeyDown = (event) => {};

  const handleKeyUp = (event) => {};

  usePCKeyHandlers(handleKeyDown, handleKeyUp);

  return (
    <div className="game-page">
      <div className="game-header">
        <NavBar
          areKeyBindLabelsVisible={areKeyBindLabelsVisible}
          onKeyBindLabelClick={toggleKeyBindLabels}
        />
      </div>
      <NotesAnimation />
      <Keyboard areKeyBindLabelsVisible={areKeyBindLabelsVisible} />
    </div>
  );
};

export default GameLogic;
