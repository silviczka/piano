import './NotesAnimation.css';
import { AnimatePresence } from 'motion/react';
import Stave from '../Stave/Stave';
import NotesVisual from './NotesVisual';
import HitZone from './HitZone';

const NotesAnimation = ({
  notes,
  handleNoteCompletion,
  noteRefs,
  hitZoneCenter,
  currentPlaybackTime,
  isPaused,
  isRestarted,
}) => {
  return (
    <div className="game-area">
      <div className="music-stave-container">
        <div className="stave">
          <Stave />
        </div>

        <div className="hitzone">
          <HitZone hitZoneCenter={hitZoneCenter} />
        </div>

        <div className="notes-wrapper">
          {!isRestarted && (
            <AnimatePresence>
              {notes.map(({ note, id, scheduledJsonTime }) => {
                return (
                  <NotesVisual
                    key={id}
                    note={note}
                    id={id}
                    noteRef={noteRefs}
                    onComplete={handleNoteCompletion}
                    currentPlaybackTime={currentPlaybackTime}
                    scheduledJsonTime={scheduledJsonTime}
                    hitZoneCenter={hitZoneCenter}
                    isPaused={isPaused}
                    isRestarted={isRestarted}
                  />
                );
              })}
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
};
export default NotesAnimation;
