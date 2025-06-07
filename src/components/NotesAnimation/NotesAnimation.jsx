import './NotesAnimation.css';
import { useEffect } from 'react';
import Stave from '../Stave/Stave';

const NotesAnimation = ({ props }) => {
  return (
    <div className="game-area">
      <Stave />
    </div>
  );
};
export default NotesAnimation;
