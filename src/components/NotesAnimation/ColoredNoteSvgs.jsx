import C4 from './img/notes/C4.svg?react';
import CSharp4 from './img/notes/CSharp4.svg?react';
import D4 from './img/notes/D4.svg?react';
import DSharp4 from './img/notes/DSharp4.svg?react';
import E4 from './img/notes/E4.svg?react';
import F4 from './img/notes/F4.svg?react';
import FSharp4 from './img/notes/FSharp4.svg?react';
import G4 from './img/notes/G4.svg?react';
import GSharp4 from './img/notes/GSharp4.svg?react';
import A4 from './img/notes/A4.svg?react';
import ASharp4 from './img/notes/ASharp4.svg?react';
import B4 from './img/notes/B4.svg?react';
import C5 from './img/notes/C5.svg?react';
import CSharp5 from './img/notes/CSharp5.svg?react';
import D5 from './img/notes/D5.svg?react';
import DSharp5 from './img/notes/DSharp5.svg?react';
import E5 from './img/notes/E5.svg?react';
import F5 from './img/notes/F5.svg?react';
import FSharp5 from './img/notes/FSharp5.svg?react';
import G5 from './img/notes/G5.svg?react';
import GSharp5 from './img/notes/GSharp5.svg?react';
import A5 from './img/notes/A5.svg?react';
import ASharp5 from './img/notes/ASharp5.svg?react';
import B5 from './img/notes/B5.svg?react';
import C6 from './img/notes/C6.svg?react';

export const noteSvgs = {
  C4: { note: C4, color: '#FF3B30' }, // Red
  CSharp4: { note: CSharp4, color: '#FF5E3A' }, // Reddish Orange
  D4: { note: D4, color: '#FF9500' }, // Orange
  DSharp4: { note: DSharp4, color: '#FFCC00' }, // Yellow-Orange
  E4: { note: E4, color: '#FFE200' }, // Yellow
  F4: { note: F4, color: '#D4ED00' }, // Yellow-Green
  FSharp4: { note: FSharp4, color: '#A4E100' }, // Lime Green
  G4: { note: G4, color: '#60C917' }, // Green
  GSharp4: { note: GSharp4, color: '#2CD188' }, // Mint Green
  A4: { note: A4, color: '#00C8B5' }, // Turquoise
  ASharp4: { note: ASharp4, color: '#00B7E3' }, // Light Blue
  B4: { note: B4, color: '#0099FF' }, // Blue
  C5: { note: C5, color: '#007AFF' }, // Deeper Blue
  CSharp5: { note: CSharp5, color: '#5867FF' }, // Indigo Blue
  D5: { note: D5, color: '#8E5CFF' }, // Blue-Violet
  DSharp5: { note: DSharp5, color: '#B05EFF' }, // Violet
  E5: { note: E5, color: '#CC60FF' }, // Purple
  F5: { note: F5, color: '#DA63E0' }, // Magenta-Purple
  FSharp5: { note: FSharp5, color: '#E867B3' }, // Pinkish Magenta
  G5: { note: G5, color: '#F06D96' }, // Pinkish Red
  GSharp5: { note: GSharp5, color: '#F47C85' }, // Soft Coral
  A5: { note: A5, color: '#F68D7B' }, // Orange Coral
  ASharp5: { note: ASharp5, color: '#F9A66A' }, // Soft Orange
  B5: { note: B5, color: '#FFB84D' }, // Apricot
  C6: { note: C6, color: '#FFD369' }, // Light Yellow-Orange
};

const ColoredNoteSvgs = ({ noteName, width, height }) => {
  const entry = noteSvgs[noteName];

  if (!entry) {
    return <div style={{ color: 'red' }}>Unknown note: {noteName}</div>;
  }
  const { note: NoteComponent, color } = entry;

  return (
    // NoteComponent is an imported SVG as a React component (via ?react)
    <NoteComponent width={width} height={height} style={{ fill: color }} />
  );
};

export default ColoredNoteSvgs;
