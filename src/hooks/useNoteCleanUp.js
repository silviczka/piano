import { useEffect, useRef } from "react";

const useNoteCleanup = ({ setNotes, setNotePositions, noteRefs, isPaused }) => {
  const deleteTimeouts = useRef({});
  const isPausedRef = useRef(isPaused);

  useEffect(() => {
    isPausedRef.current = isPaused;

    if (isPaused) {
      // Delete pending timeouts
      Object.values(deleteTimeouts.current).forEach(clearTimeout);
      deleteTimeouts.current = {};
    }
  }, [isPaused]);

  const handleNoteCompletion = (id) => {
    const maybeDelete = () => {
      // If playback is paused, delay until resumed
      if (isPausedRef.current) {
        // Check again later
        // const retryTimeout = setTimeout(() => maybeDelete(), 500);
        const retryTimeout = setTimeout(() => maybeDelete(), 0);
        deleteTimeouts.current[id] = retryTimeout;
        return;
      }

      // Not paused now – remove the note
      setNotes((prev) => prev.filter((note) => note.id !== id));
      setNotePositions((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
      delete noteRefs.current[id];
      delete deleteTimeouts.current[id];
    };

    // Initiate 2-second countdown to remove the note
    // const timeout = setTimeout(() => maybeDelete(), 2000);
    const timeout = setTimeout(() => maybeDelete(), 0);
    deleteTimeouts.current[id] = timeout;
  };

  return { handleNoteCompletion };
};

export default useNoteCleanup;
