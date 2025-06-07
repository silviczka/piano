import './NotesAnimation.css';
import { AnimatePresence } from 'motion/react';
import Stave from '../Stave/Stave';
import NotesVisual from './NotesVisual';
import HitZone from './HitZone';

const NotesAnimation = ({ notes, hitZoneCenter, noteRefs }) => {
  return (
    <div className="game-area">
      <div className="music-stave-container">
        <Stave />
        <div className="hitzone">
          <HitZone hitZoneCenter={hitZoneCenter} />
        </div>
      </div>
      <AnimatePresence>
        {notes.map(({ note, id }) => {
          return (
            <NotesVisual
              key={id}
              note={note}
              id={id}
              noteRef={noteRefs}
              hitZoneCenter={hitZoneCenter}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};
export default NotesAnimation;
