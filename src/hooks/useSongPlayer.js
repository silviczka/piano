import { useRef } from "react";
import { NOTE_TRAVEL_TIME, HITZONE_DURATION } from "../constants/constants";
import spawnRandomNote from "../utils/spawnRandomNote";

const useSongPlayer = ({ setNotes, mode }) => {
  const { getRandomNote, start } = spawnRandomNote({ setNotes });
  const timeoutsRef = useRef([]);
  const sessionIdRef = useRef(Date.now());
  const playbackStartTimeRef = useRef(null);
  const pausedDurationRef = useRef(0);
  const pauseStartRef = useRef(null);
  const currentSongRef = useRef(null);
  const spawnedNoteIdsRef = useRef(new Set()); // Unique ids added only

  // Ensures the note stays in place after completing its animation (at the hit zone)
  const stopSong = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    spawnedNoteIdsRef.current.clear();
  };

  // Ensures note spawn timing remains accurate after unpausing
  const getCurrentPlaybackTime = () => {
    if (playbackStartTimeRef.current === null) return 0;
    const now = Date.now();
    const pausedTime = pausedDurationRef.current;
    return (now - playbackStartTimeRef.current - pausedTime) / 1000;
  };

  const playSong = (songJson, offsetPlaybackTime = 0) => {
    if (!songJson || !Array.isArray(songJson.notes)) {
      console.warn("Invalid songJson structure:", songJson);
      return;
    }

    if (mode === "tutorial") {
      const test = start();
      return;
    }

    // Perform a full reset when restarting — triggered by new song start or restart
    if (offsetPlaybackTime === 0) {
      stopSong();
      spawnedNoteIdsRef.current.clear();
    } else {
      // Clear pending timeouts without resetting spawn history; avoid spawning duplicate notes
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    }

    sessionIdRef.current = Date.now();
    currentSongRef.current = songJson;

    playbackStartTimeRef.current = Date.now() - offsetPlaybackTime * 1000;
    pauseStartRef.current = null;

    songJson.notes.forEach((noteObj) => {
      const { note, time } = noteObj;
      const adjustedTime = Math.max(time, 0.1);
      const currentPlaybackTime = getCurrentPlaybackTime();

      // Skip notes that have already spawned and prevent duplicates
      if (adjustedTime < currentPlaybackTime - NOTE_TRAVEL_TIME) return;

      const id = `${note}_${time}`;

      const spawnTime =
        (adjustedTime - NOTE_TRAVEL_TIME - currentPlaybackTime) * 1000;
      const removeTime =
        (adjustedTime - currentPlaybackTime + HITZONE_DURATION) * 1000;

      const spawnTimeout = setTimeout(() => {
        // Schedule the note spawn, but first check if it has already been spawned (e.g., after pause/resume)
        if (spawnedNoteIdsRef.current.has(id)) return;

        spawnedNoteIdsRef.current.add(id);

        const newNote = {
          note,
          id,
          position: 100,
          scheduledJsonTime: adjustedTime,
        };

        setNotes((prev) =>
          prev.some((n) => n.id === newNote.id) ? prev : [...prev, newNote],
        );
      }, Math.max(spawnTime, 0));

      timeoutsRef.current.push(spawnTimeout);
    });
  };

  const pause = () => {
    // Cancel only timeouts, do not clear spawn history
    pauseStartRef.current = Date.now();
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const resume = () => {
    // Skip processing if there’s no loaded song or pause hasn’t begun
    if (!currentSongRef.current || pauseStartRef.current === null) return;

    // Increment by the time the pause was active (from pause start to current time)
    const now = Date.now();
    pausedDurationRef.current += now - pauseStartRef.current;
    pauseStartRef.current = null;

    // Continue playing the song from the paused position
    const currentPlaybackTime = getCurrentPlaybackTime();
    playSong(currentSongRef.current, currentPlaybackTime);
  };

  return {
    playSong,
    stopSong,
    pause,
    resume,
    getCurrentPlaybackTime,
  };
};

export default useSongPlayer;
