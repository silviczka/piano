import './GameLogic.css';
import NavBar from '../UI/NavBarMenu/NavBar/NavBar';
import Keyboard from '../Piano/Keyboard/Keyboard';

const GameLogic = () => {
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
