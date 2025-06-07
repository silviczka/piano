import midiEnabledIcon from "./img/midiEnabled.svg";
import midiDisabledIcon from "./img/midiDisabled.svg";
import midiPromptIcon from "./img/midiPrompt.svg";
import Tippy from "@tippyjs/react";

const MidiListener = () => {
  return (
    <>
      <Tippy content="MIDI povoleno.">
        <img src={midiEnabledIcon} alt="midi-icon" className="menu-icon" />
      </Tippy>
    </>
  );
};

export default MidiListener;
