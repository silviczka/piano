import { motion, useAnimation } from 'motion/react';
import { noteSvgs } from './ColoredNoteSvgs';
import { NOTE_TRAVEL_TIME } from '../../constants/constants';
import { useEffect } from 'react';

const notesYandSizeMap = {
  C4: { y: -47, size: '40px', viewBox: '0 0 48 24' },
  CSharp4: { y: -47, size: '40px', viewBox: '0 0 72 24' },
  D4: { y: -36, size: '40px', viewBox: '0 0 48 24' },
  DSharp4: { y: -36, size: '40px', viewBox: '0 0 72 24' },
  E4: { y: -16, size: '32px', viewBox: '0 0 48 24' },
  F4: { y: 0, size: '32px', viewBox: '0 0 48 24' },
  FSharp4: { y: -3, size: '40px', viewBox: '0 0 72 24' },
  G4: { y: 16, size: '32px', viewBox: '0 0 48 24' },
  GSharp4: { y: 12, size: '40px', viewBox: '0 0 72 24' },
  A4: { y: 32, size: '32px', viewBox: '0 0 48 24' },
  ASharp4: { y: 28, size: '40px', viewBox: '0 0 72 24' },
  B4: { y: 48, size: '32px', viewBox: '0 0 48 24' },
  C5: { y: 62, size: '32px', viewBox: '0 0 48 24' },
  CSharp5: { y: 58, size: '40px', viewBox: '0 0 72 24' },
  D5: { y: 79, size: '32px', viewBox: '0 0 48 24' },
  DSharp5: { y: 74, size: '40px', viewBox: '0 0 72 24' },
  E5: { y: 94, size: '32px', viewBox: '0 0 48 24' },
  F5: { y: 110, size: '32px', viewBox: '0 0 48 24' },
  FSharp5: { y: 107, size: '40px', viewBox: '0 0 72 24' },
  G5: { y: 126, size: '32px', viewBox: '0 0 48 24' },
  GSharp5: { y: 123, size: '40px', viewBox: '0 0 72 24' },
  A5: { y: 138, size: '40px', viewBox: '0 0 48 24' },
  ASharp5: { y: 135, size: '40px', viewBox: '0 0 72 24' },
  B5: { y: 143, size: '40px', viewBox: '0 0 48 24' },
  C6: { y: 131, size: '80px', viewBox: '0 0 72 48' },
};

const NoteVisual = ({
  note,
  id,
  onComplete,
  onCompleteTutorial,
  noteRef,
  currentPlaybackTime,
  scheduledJsonTime,
  hitZoneCenter,
  isPaused,
  isRestarted,
  gameMode,
}) => {
  // const screen = useScreenSize();
  const controls = useAnimation();

  // fallback if note missing
  const {
    y: bottomValue = 0,
    size: noteHeight = '40px',
    viewBox = '0 0 48 24',
  } = notesYandSizeMap[note] || {};

  const spawnX = '100vw'; // start from right offscreen
  let hitZoneX = `${7}rem`;

  if (gameMode === 'tutorial') {
    hitZoneX = `${hitZoneCenter}px`;
  }

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
      transition={transition}
      onAnimationComplete={() => {
        if (!isPaused && gameMode === 'normal') {
          onComplete(id);
        } else if (gameMode === 'tutorial') {
          onCompleteTutorial(note);
        }
      }}
      className="absolute z-40 object-contain motion-wrapper"
      style={{
        height: noteHeight,
        bottom: `${bottomValue}px`,
        position: 'absolute',
        transform: 'translateX(-50%)',
      }}
    >
      {SvgNote ? (
        <SvgNote
          viewBox={viewBox}
          height={noteHeight}
          width="100%"
          className="h-full w-auto note-svg"
          style={{
            color: fillColor,
            filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25))',
          }}
        />
      ) : (
        <div className="text-red-500">No image for {note}</div>
      )}
    </motion.div>
  );
};

export default NoteVisual;
