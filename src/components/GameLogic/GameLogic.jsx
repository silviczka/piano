import './GameLogic.css';
import NavBar from '../UI/NavBarMenu/NavBar/NavBar';
import Keyboard from '../Piano/Keyboard/Keyboard';
import usePCKeyHandlers from '../../hooks/usePCKeyHandlers';
import NotesAnimation from '../NotesAnimation/NotesAnimation';
import { useState } from 'react';

const GameLogic = () => {
  const hitThreshold = 80; // +/- tolerance in px
  const hitZoneCenterPct = 50; // Midpoint of the hit zone
  const [hitZoneCenter, setHitZoneCenter] = useState(
    (window.innerWidth * hitZoneCenterPct) / 100,
  );
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
      <NotesAnimation
        notes={notes}
        hitThreshold={hitThreshold}
        hitZoneCenter={hitZoneCenter}
      />
      <Keyboard areKeyBindLabelsVisible={areKeyBindLabelsVisible} />
    </div>
  );
};

export default GameLogic;
