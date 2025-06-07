import './NotesAnimation.css';
import { AnimatePresence } from 'motion/react';
import Stave from '../Stave/Stave';
import NotesVisual from './NotesVisual';
import HitZone from './HitZone';
import { HIT_THRESHOLD } from '../constants/constants';

const NotesAnimation = ({ notes, hitZoneCenter }) => {
  return (
    <div className="game-area">
      <div className="music-stave-container">
        <Stave />
        <div className="hitzone">
          <HitZone hitZoneCenter={hitZoneCenter} hitThreshold={HIT_THRESHOLD} />
        </div>
      </div>
      <AnimatePresence>
        {notes.map(({ id }) => {
          return (
            <NotesVisual
              key={id}
              note={note}
              id={id}
              hitZoneCenter={hitZoneCenter}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};
export default NotesAnimation;
