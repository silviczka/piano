import "./NotesAnimation.css";
import { AnimatePresence } from "motion/react";
import Stave from "../Stave/Stave";
import NotesVisual from "./NotesVisual";
import HitZone from "./HitZone";

const NotesAnimation = ({
  notes,
  handleNoteCompletion,
  noteRefs,
  hitZoneCenter,
  currentPlaybackTime,
  isPaused,
}) => {
  return (
    <div className="game-area">
      <div className="music-stave-container">
        <Stave />
        <div className="hitzone">
          <HitZone hitZoneCenter={hitZoneCenter} />
        </div>
      </div>

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
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
};
export default NotesAnimation;
