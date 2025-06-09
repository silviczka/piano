import "./Keyboard.css";
import Key from "../Key/Key";
import { useState, useRef } from "react";
import whiteKeys from "../../../assets/keys/whiteKeys";
import blackKeys from "../../../assets/keys/blackKeys";
import getNoteyBindByKey from "../../../utils/getNoteByKeyBind";
import usePCKeyHandlers from "../../../hooks/usePCKeyHandlers";
import useMidiNoteTrigger from "../../../hooks/useMidiNoteTrigger";
import { useEffect } from "react";

const Keyboard = ({
  areKeyBindLabelsVisible,
  areColorsVisible,
  areNoteLabelsVisible,
  onKeyInput,
  midiInput,
  tutorialInput,
  gameMode,
  onTutorialNoteHit,
}) => {
  const [activeKeys, setActiveKeys] = useState(new Set()); // track multiple active keys
  const keyRefs = useRef({});

  const playSound = (note) => {
    const formattedNote = note.includes("#")
      ? note.replace("#", "Sharp")
      : note;
    const soundFile = `/sounds/${formattedNote}.mp3`;
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

    if (gameMode === "tutorial") {
      const pressedNote = keyRefs.current[note];
      if (pressedNote?.classList.contains("white-key__simulated")) {
        pressedNote.classList.toggle("white-key__simulated");
      }

      if (pressedNote?.classList.contains("black-key__simulated")) {
        pressedNote.classList.toggle("black-key__simulated");
      }
    }
  };

  const playAndPressNote = (note) => {
    if (note === undefined) return;

    const pressedNote = keyRefs.current[note];

    if (
      pressedNote?.classList.contains("white-key__pressed") ||
      pressedNote?.classList.contains("key-black__pressed")
    )
      return;

    playSound(note);
    pressedNote?.focus();
    let classToggle = "white-key__pressed";
    if (note.includes("#")) {
      classToggle = "key-black__pressed";
    }
    pressedNote?.classList.toggle(classToggle);
  };

  const handleKeyDown = (event) => {
    const pressedKeyBind = event.key.toUpperCase();
    const note = getNoteyBindByKey(pressedKeyBind) || null;
    if (note === null) return;

    event.preventDefault();
    document.activeElement.blur();
    playAndPressNote(note);
    onKeyInput(note);
  };

  const releaseNote = (note) => {
    if (note === undefined) return;

    let classToggle = "white-key__pressed";
    if (note.includes("#")) {
      classToggle = "key-black__pressed";
    }
    keyRefs.current[note]?.classList.toggle(classToggle);
  };

  const handleKeyUp = (event) => {
    const pressedKeyBind = event.key.toUpperCase();
    const note = getNoteyBindByKey(pressedKeyBind) || null;
    if (note === null) return;
    releaseNote(note);
  };

  usePCKeyHandlers(handleKeyDown, handleKeyUp);

  const handleInteractionStart = (note) => {
    playSound(note);
    onKeyInput(note);
  };

  const getHandlers = (note) => ({
    onMouseDown: (e) => {
      handleInteractionStart(note);
    },
    onTouchEnd: (e) => releaseNote(note),
  });

  useMidiNoteTrigger({
    midiInput,
    // isPaused,
    // isResuming,
    onKeyInput,
    playAndPressNote,
    releaseNote,
  });

  useEffect(() => {
    if (tutorialInput === null) return;

    const formattedNote = tutorialInput.includes("Sharp")
      ? tutorialInput.replace("Sharp", "#")
      : tutorialInput;
    const pressedNote = keyRefs.current[formattedNote];

    pressedNote?.focus();
    let classToggle = "white-key__simulated";
    if (tutorialInput.includes("#") || tutorialInput.includes("Sharp")) {
      classToggle = "black-key__simulated";
    }

    if (!pressedNote?.classList.contains(classToggle)) {
      pressedNote.classList.toggle(classToggle);
    }
  }, [tutorialInput]);

  const renderKey = ({ note, offset, keyBind, color }, type) => (
    <Key
      key={`${type}-${note}`}
      note={note}
      type={type}
      keyBind={keyBind}
      offset={offset}
      color={color}
      areKeyBindLabelsVisible={areKeyBindLabelsVisible}
      areNoteLabelsVisible={areNoteLabelsVisible}
      isColorVisible={areColorsVisible}
      ref={(el) => (keyRefs.current[note] = el)}
      {...getHandlers(note)}
    />
  );

  return (
    <div className="keyboard-wrapper ">
      <div className="keyboard">
        <div className="keyboard-white">
          {whiteKeys.map((key) =>
            renderKey(
              {
                note: key.note,
                keyBind: key.keyBind,
                offset: key.keyboardPositionPerct,
                color: key.color,
              },
              "white",
            ),
          )}
        </div>
        {blackKeys.map((key) =>
          renderKey(
            {
              note: key.note,
              keyBind: key.keyBind,
              offset: key.keyboardPositionPerct,
              color: key.color,
            },
            "black",
          ),
        )}
      </div>
    </div>
  );
};

export default Keyboard;
