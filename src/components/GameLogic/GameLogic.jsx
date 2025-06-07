import './GameLogic.css';
import NavBar from '../UI/NavBarMenu/NavBar/NavBar';
import Keyboard from '../Piano/Keyboard/Keyboard';
import usePCKeyHandlers from '../../hooks/usePCKeyHandlers';
import NotesAnimation from '../NotesAnimation/NotesAnimation';

const GameLogic = () => {
  const handleKeyDown = (event) => {};

  const handleKeyUp = (event) => {};

  usePCKeyHandlers(handleKeyDown, handleKeyUp);

  return (
    <div className="game-page">
      <div className="game-header">
        <NavBar />
      </div>
      <NotesAnimation />
      <Keyboard />
    </div>
  );
};

export default GameLogic;
