import { motion } from 'motion/react';
import { noteSvgs } from './ColoredNoteSvgs';

const noteYMap = {
  C4: 15,
  CSharp4: 16,
  D4: 19,
  DSharp4: 20,
  E4: 24,
  F4: 29.5,
  FSharp4: 32,
  G4: 35,
  GSharp4: 37,
  A4: 40,
  ASharp4: 42.5,
  B4: 45.5,
  C5: 51,
  CSharp5: 53.5,
  D5: 57,
  DSharp5: 59,
  E5: 62,
  F5: 68,
  FSharp5: 70,
  G5: 73,
  GSharp5: 76,
  A5: 77,
  ASharp5: 78,
  B5: 80,
  C6: 83,
};

const spawnX = '100vw'; // start from right offscreen

const NotesVisual = ({ id, hitZoneCenter }) => {
  // const bottom = `${noteYMap[note] || 10}%`;

  // const entry = noteSvgs[note];
  // const SvgNote = entry?.note;
  // const fillColor = entry?.color || 'black';

  const initial = { left: spawnX };
  const animate = { left: `${hitZoneCenter}px` };
  const exit = { left: '-100vw', transition: { duration: 0.5 } };
  const transition = { duration: 2, ease: 'linear' }; // temp static duration

  return (
    <motion.div
      key={id}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      className="absolute z-40 object-contain"
      style={{
        height: '10vh',
        bottom,
        position: 'absolute',
        transform: 'translateX(-50%)',
      }}
    >
      {/* <span className="text-white text-sm font-bold mb-1">{note}</span> */}
      {/* {SvgNote ? (
        <SvgNote
          className="h-full w-auto"
          style={{ color: fillColor, width: 'auto', height: '50%' }}
        />
      ) : (
        <div className="text-red-500">No image for {note}</div>
      )} */}
    </motion.div>
  );
};

export default NotesVisual;
