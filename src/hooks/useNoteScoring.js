import { SCORE } from "../constants/constants";

const useNoteScoring = ({
  notes,
  notePositions,
  hitZoneCenter,
  hitThreshold,
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

    if (typeof matchedNote === "undefined") return;

    const rect = noteRefs.current[matchedNote.id].getBoundingClientRect();
    const noteWidth = noteRefs.current[matchedNote.id].offsetWidth;
    const noteCenter = rect.left + noteWidth / 2;
    const distance = Math.abs(noteCenter - hitZoneCenter);
    if (distance > hitThreshold) return;
    let scoreToAdd = SCORE;
    let feedbackText = `+${SCORE}`;

    noteRefs.current[matchedNote.id].children[0].classList.add("note-hit");

    setScore((prev) => {
      return prev + scoreToAdd;
    });
    setFeedback(feedbackText);
    setTimeout(() => setFeedback(""), 1000);
    setTimeout(() => {
      setNotes((prevNotes) => prevNotes.filter((n) => n.id !== matchedNote.id));
    }, 4000);

    /*  setNotes((prevNotes) => prevNotes.filter((n) => n.id !== matchedNote.id));
    setNotePositions((prev) => {
      const updated = { ...prev };
      delete updated[matchedNote.id];
      return updated;
    });
    delete noteRefs.current[matchedNote.id]; */
  };

  return { evaluateNoteHit };
};
export default useNoteScoring;
