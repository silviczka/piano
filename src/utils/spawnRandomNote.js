import { useRef } from "react";

const ALL_NOTES = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];

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
    console.log(lastSpawnTutorial.current);
    if (lastSpawnTutorial.current === null) {
      lastSpawnTutorial.current = Date.now();
      timeToSpawn = 4;
      isFirstNote = true;
    } else {
    }

    const now = Date.now();
    const timeSinceLastSpawn = (now - lastSpawnTutorial.current) / 1000;
    // console.log("Time since last spawn:", timeSinceLastSpawn.toFixed(2), "s");
    if (!isFirstNote) timeToSpawn = timeSinceLastSpawn + 4;

    console.log(timeToSpawn);

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
