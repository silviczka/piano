import { AnimatePresence } from 'motion/react';
import NotesVisual from './NotesVisual';
import HitZone from './HitZone';

import './NotesAnimation.css';
import './Stave.css';
import Line from '../Line/Line';
import clef from './img/musicKey_bl.png';

const NotesAnimation = ({
  notes,
  handleNoteCompletion,
  handleNoteCompletionTutorial,
  noteRefs,
  hitZoneCenter,
  currentPlaybackTime,
  isPaused,
  isRestarted,
  gameMode,
}) => {
  return (
    <div className="game-area">
      <div className="music-stave-container">
        <div className="stave">
          <div className="lines">
            <Line />
            <Line />
            <Line />
            <Line />
            <Line />
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
                        onCompleteTutorial={handleNoteCompletionTutorial}
                        currentPlaybackTime={currentPlaybackTime}
                        scheduledJsonTime={scheduledJsonTime}
                        hitZoneCenter={hitZoneCenter}
                        isPaused={isPaused}
                        isRestarted={isRestarted}
                        gameMode={gameMode}
                      />
                    );
                  })}
                </AnimatePresence>
              )}
            </div>
            <div className="clef">
              <img src={clef} alt="musicKey" />
            </div>
          </div>
        </div>

        <div className="hitzone">
          <HitZone hitZoneCenter={hitZoneCenter} />
        </div>
      </div>
    </div>
  );
};
export default NotesAnimation;
