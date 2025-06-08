import midiEnabledIcon from "./img/midiEnabled.svg";
import midiDisabledIcon from "./img/midiDisabled.svg";
import midiPromptIcon from "./img/midiPrompt.svg";
import NavIconTooltip from "../../NavIconTooltip/NavIconTooltip";

const MidiListener = () => {
  return (
    <>
      <NavIconTooltip text="MIDI rozhraní povoleno">
        <img src={midiEnabledIcon} alt="midi-icon" className="menu-icon" />
      </NavIconTooltip>
    </>
  );
};

export default MidiListener;
