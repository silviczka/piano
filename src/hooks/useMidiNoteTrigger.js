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
    console.log(midiInput);
    // if (!midiInput || isPaused || isResuming) return;
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
