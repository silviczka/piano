import { motion, useAnimation } from "motion/react";
import { noteSvgs } from "./ColoredNoteSvgs";
import { HIT_THRESHOLD, NOTE_TRAVEL_TIME } from "../../constants/constants";
import { useEffect } from "react";

const noteYMap = {
  C4: 14,
  CSharp4: 14,
  D4: 17,
  DSharp4: 17,
  E4: 21,
  F4: 25,
  FSharp4: 25,
  G4: 28,
  GSharp4: 28,
  A4: 32,
  ASharp4: 32,
  B4: 35,
  C5: 38,
  CSharp5: 38,
  D5: 42,
  DSharp5: 42,
  E5: 45,
  F5: 49,
  FSharp5: 49,
  G5: 52,
  GSharp5: 52,
  A5: 56,
  ASharp5: 56,
  B5: 59.5,
  C6: 47,
};

const noteSizeMap = { C6: "19.5vh" }; //svg of bigger size
const spawnX = "100vw"; // start from right offscreen

const NoteVisual = ({
  note,
  id,
  onComplete,
  noteRef,
  currentPlaybackTime,
  scheduledJsonTime,
  hitZoneCenter,
  isPaused,
}) => {
  const controls = useAnimation();

  // const noteWidth = noteRef.current[id]?.offsetWidth || 0;
  // const noteCenter = noteWidth / 2;
  // const hitZoneX = `${hitZoneCenter - HIT_THRESHOLD + noteCenter}px`;
  // const hitZoneX = `${hitZoneCenter}px`;
  const hitZoneX = `${7}rem`;

  const noteHeight = noteSizeMap[note] || "10vh";
  const bottom = `${noteYMap[note] || 10}%`;

  const entry = noteSvgs[note];
  const SvgNote = entry?.note;
  const fillColor = entry?.color || "black";

  const noteStartTime = scheduledJsonTime - NOTE_TRAVEL_TIME;
  const animationDuration = Math.max(
    scheduledJsonTime - currentPlaybackTime,
    0,
  );
  const shouldSpawn =
    typeof scheduledJsonTime === "number" &&
    currentPlaybackTime >= noteStartTime;

  useEffect(() => {
    if (!shouldSpawn) return;

    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        left: hitZoneX,
        transition: {
          duration: scheduledJsonTime - currentPlaybackTime,
          ease: "linear",
        },
      });
    }
  }, [
    isPaused,
    shouldSpawn,
    controls,
    hitZoneX,
    scheduledJsonTime,
    currentPlaybackTime,
  ]);

  if (!shouldSpawn) return null;

  const initial = { left: spawnX };
  // const exit = { left: "-100vw", transition: { duration: 3 } };
  const transition = { duration: animationDuration, ease: "linear" };

  return (
    <motion.div
      key={id}
      ref={(el) => (noteRef.current[id] = el)}
      initial={initial}
      animate={controls}
      // exit={exit}
      transition={transition}
      onAnimationComplete={() => {
        if (!isPaused) {
          onComplete(id);
        }
      }}
      className="absolute z-40 object-contain motion-wrapper"
      style={{
        height: noteHeight,
        bottom,
        position: "absolute",
        transform: "translateX(-50%)",
      }}
    >
      {SvgNote ? (
        <SvgNote
          className="h-full w-auto note-svg"
          style={{ color: fillColor, width: "auto", height: "50%" }}
        />
      ) : (
        <div className="text-red-500">No image for {note}</div>
      )}
    </motion.div>
  );
};

export default NoteVisual;
