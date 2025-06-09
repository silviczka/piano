import { motion, useAnimation } from 'motion/react';
import { noteSvgs } from './ColoredNoteSvgs';
import { HIT_THRESHOLD, NOTE_TRAVEL_TIME } from '../../constants/constants';
import { useEffect } from 'react';

const noteYMap = {
  C4: 17,
  CSharp4: 17,
  D4: 20,
  DSharp4: 20,
  E4: 24,
  F4: 27.5,
  FSharp4: 27.5,
  G4: 30.5,
  GSharp4: 30.5,
  A4: 34,
  ASharp4: 34,
  B4: 37,
  C5: 40,
  CSharp5: 40,
  D5: 43.5,
  DSharp5: 43.5,
  E5: 47,
  F5: 50,
  FSharp5: 50,
  G5: 53,
  GSharp5: 53,
  A5: 56,
  ASharp5: 56,
  B5: 59.5,
  C6: 46.5,
};

const noteSizeMap = { C6: '19.5vh' }; //svg of bigger size
const spawnX = '100vw'; // start from right offscreen

const NoteVisual = ({
  note,
  id,
  onComplete,
  noteRef,
  currentPlaybackTime,
  scheduledJsonTime,
  hitZoneCenter,
  isPaused,
  isRestarted,
}) => {
  const controls = useAnimation();

  // const noteWidth = noteRef.current[id]?.offsetWidth || 0;
  // const noteCenter = noteWidth / 2;
  // const hitZoneX = `${hitZoneCenter - HIT_THRESHOLD + noteCenter}px`;
  // const hitZoneX = `${hitZoneCenter}px`;
  const hitZoneX = `${7}rem`;

  const noteHeight = noteSizeMap[note] || '8.5vh';
  const bottom = `${noteYMap[note] || 10}%`;

  const entry = noteSvgs[note];
  const SvgNote = entry?.note;
  const fillColor = entry?.color || 'black';

  const noteStartTime = scheduledJsonTime - NOTE_TRAVEL_TIME;
  const animationDuration = Math.max(
    scheduledJsonTime - currentPlaybackTime,
    0,
  );
  const shouldSpawn =
    typeof scheduledJsonTime === 'number' &&
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
          ease: 'linear',
        },
      });
    }
  }, [isPaused, shouldSpawn]);

  if (!shouldSpawn) return null;

  const initial = { left: spawnX };
  // const exit = { left: "-100vw", transition: { duration: 3 } };

  const exit = {
    left: `${7}rem`,
    transition: { duration: scheduledJsonTime - currentPlaybackTime },
  };

  const transition = { duration: animationDuration, ease: 'linear' };

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
        position: 'absolute',
        transform: 'translateX(-50%)',
      }}
    >
      {SvgNote ? (
        <SvgNote
          className="h-full w-auto note-svg"
          style={{ color: fillColor, width: 'auto', height: '50%' }}
        />
      ) : (
        <div className="text-red-500">No image for {note}</div>
      )}
    </motion.div>
  );
};

export default NoteVisual;
