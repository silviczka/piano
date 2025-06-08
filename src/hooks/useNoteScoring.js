import { SCORE, HIT_THRESHOLD } from "../constants/constants";
import getNoteColor from "../utils/getNoteColor";

const useNoteScoring = ({
  notes,
  notePositions,
  hitZoneCenter,
  setNotes,
  setNotePositions,
  noteRefs,
  setScore,
  setFeedback,
}) => {
  const evaluateNoteHit = (note) => {
    if (note.includes("#")) {
      note = note.replace("#", "Sharp");
    }
    const matchedNote = notes.find((n) => {
      return n.note === note;
    });

    if (typeof matchedNote === "undefined" || noteRefs === "undefined") return;

    const rect = noteRefs.current[matchedNote.id]?.getBoundingClientRect();
    const noteWidth = noteRefs.current[matchedNote.id]?.offsetWidth;
    const noteCenter = rect.left + noteWidth / 2;
    const distance = Math.abs(noteCenter - hitZoneCenter);
    if (distance > HIT_THRESHOLD) return;
    let scoreToAdd = SCORE;
    let feedbackText = `+${SCORE}`;

    noteRefs.current[matchedNote.id]?.children[0].classList.add("note-hit");

    setScore((prev) => {
      return prev + scoreToAdd;
    });
    const noteColor = getNoteColor(matchedNote.note);
    setFeedback(noteColor);
    setTimeout(() => setFeedback(""), 1000);
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== matchedNote.id));
    setNotePositions((prev) => {
      const updated = { ...prev };
      delete updated[matchedNote.id];
      return updated;
    });
    delete noteRefs.current[matchedNote.id];
  };

  return { evaluateNoteHit };
};
export default useNoteScoring;
