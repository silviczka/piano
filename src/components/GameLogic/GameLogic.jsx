import "./GameLogic.css";
import NavBar from "../UI/NavBarMenu/NavBar/NavBar";
import Keyboard from "../Piano/Keyboard/Keyboard";
import usePCKeyHandlers from "../../hooks/usePCKeyHandlers";

const GameLogic = () => {
  usePCKeyHandlers(handleKeyDown, handleKeyUp);

  return (
    <div className="game-page">
      <div className="game-header">
        <NavBar />
        <Keyboard />
      </div>
    </div>
  );
};

export default GameLogic;
