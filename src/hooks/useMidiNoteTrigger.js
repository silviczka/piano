import { useEffect } from 'react';

const useMidiNoteTrigger = ({
  midiInput,
  isPaused,
  isResuming,
  playAndPressNote,
  releaseNote,
  onKeyInput,
}) => {
  useEffect(() => {
    if (!midiInput) return;

    document.activeElement.blur();

    const note = midiInput?.noteName;

    if (midiInput.isMidiPressed) {
      playAndPressNote(note);
      onKeyInput(note);
    } else {
      setTimeout(() => {
        releaseNote(note);
      }, 500);
    }
  }, [midiInput]);
};

export default useMidiNoteTrigger;
