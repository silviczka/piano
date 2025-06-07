import "./Keyboard.css";
import Key from "../Key/Key";
import { useState } from "react";
import whiteKeys from "../../../assets/keys/whiteKeys";
import blackKeys from "../../../assets/keys/blackKeys";

const Keyboard = () => {
  const [activeKeys, setActiveKeys] = useState(new Set()); // track multiple active keys

  const playSound = (note) => {
    const formattedNote = note.includes("#")
      ? note.replace("#", "Sharp")
      : note;
    const soundFile = `/assets/Sounds/${formattedNote}.mp3`;
    console.log(soundFile);
    const audio = new Audio(soundFile);
    audio.play();

    // add key to active keys set
    setTimeout(() => {
      setActiveKeys((prevActiveKeys) => new Set([...prevActiveKeys, note]));
    }, 100); // 100ms

    // stop the sound after it finishes
    audio.onended = () => {
      setActiveKeys((prevActiveKeys) => {
        const newActiveKeys = new Set(prevActiveKeys);
        newActiveKeys.delete(note); // remove the note when sound ends
        return newActiveKeys;
      });
    };
  };

  const renderKey = ({ note }, type) => (
    <Key key={`${type}-${note}`} note={note} type={type} />
  );

  return (
    <div className="keyboard-wrapper ">
      <div className="keyboard">
        <div className="keyboard-white">
          {whiteKeys.map((key) =>
            renderKey(
              {
                note: key.note,
              },
              "white",
            ),
          )}
        </div>
        {blackKeys.map((key) =>
          renderKey(
            {
              note: key.note,
            },
            "black",
          ),
        )}
      </div>
    </div>
  );
};

export default Keyboard;
