import { useRef } from "react";

const ALL_NOTES = [
  "C4",
  "CSharp4",
  "D4",
  "DSharp4",
  "E4",
  "F4",
  "FSharp4",
  "G4",
  "GSharp4",
  "A4",
  "ASharp4",
  "B4",
  "C5",
  "CSharp5",
  "D5",
  "DSharp5",
  "E5",
  "F5",
  "FSharp5",
  "G5",
  "GSharp5",
  "A5",
  "ASharp5",
  "B5",
  "C6",
];

const spawnRandomNote = ({
  setNotes,
  lastSpawnTutorial = { current: null },
}) => {
  const isStoppedRef = useRef(true);

  const getRandomNote = () => {
    const index = Math.floor(Math.random() * ALL_NOTES.length);
    return ALL_NOTES[index];
  };

  const spawnNext = () => {
    if (isStoppedRef.current) return;
    let timeToSpawn = 0;
    let isFirstNote = false;
    if (lastSpawnTutorial.current === null) {
      lastSpawnTutorial.current = Date.now();
      timeToSpawn = 4;
      isFirstNote = true;
    } else {
    }

    const now = Date.now();
    const timeSinceLastSpawn = (now - lastSpawnTutorial.current) / 1000;
    if (!isFirstNote) timeToSpawn = timeSinceLastSpawn + 4;

    const note = getRandomNote();
    const id = `${note}_${Date.now()}`;
    const newNote = {
      note,
      id,
      position: 100,
      scheduledJsonTime: timeToSpawn,
    };

    setNotes([newNote]);
    return newNote;
  };

  const getTimeSinceLastNote = () => {
    if (!lastSpawnTutorial.current) return null;
    return Date.now() - lastSpawnTutorial.current;
  };

  const start = () => {
    isStoppedRef.current = false;
    spawnNext();
  };

  const stop = () => {
    isStoppedRef.current = true;
    setNotes([]);
  };

  const markNoteAsHit = () => {
    setNotes([]);
    start();
  };

  return {
    start,
    stop,
    markNoteAsHit,
    getRandomNote,
  };
};

export default spawnRandomNote;
