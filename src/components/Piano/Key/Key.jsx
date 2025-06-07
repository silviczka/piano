import './Key.css';
import { useRef } from 'react';

const Key = ({ note, type, keyBind, offset, ...handlers }) => {
  return (
    <svg
      {...handlers}
      className={`${type === 'white' ? 'key white' : 'key black'}`}
      style={type === 'black' ? { left: `${offset}rem` } : null}
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="300"
      viewBox="0 0 100 300"
    >
      <rect x="0" y="0" width="100" height="300" className="key-rect" />
      <text x="10" y="50" fontSize="40" fill="black">
        {note}
      </text>
      {/*   <text x="50" y="50" fontSize="40" fill="black">
        {keyBind}
      </text> */}
    </svg>
  );
};

export default Key;
