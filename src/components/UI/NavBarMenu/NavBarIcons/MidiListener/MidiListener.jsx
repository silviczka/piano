import midiEnabledIcon from "./img/midiEnabled.svg";
import midiDisabledIcon from "./img/midiDisabled.svg";
import midiPromptIcon from "./img/midiPrompt.svg";
import NavIconTooltip from "../../NavIconTooltip/NavIconTooltip";

import { useState, useEffect } from "react";
import whiteKeys from "../../../../../assets/keys/whiteKeys";
import blackKeys from "../../../../../assets/keys/blackKeys";
import { isIOS } from "react-device-detect";

const MidiListener = ({ onMidiInput }) => {
  const [permissionStatus, setPermissionStatus] = useState("prompt"); // waiting , granted , denied, error

  const handleMidiMessage = (event) => {
    const status = event.data[0];
    let isMidiPressed = false;
    if (status === 144) {
      isMidiPressed = true;
    } else {
      isMidiPressed = false;
    }

    const noteNumber = event.data[1];
    const note = getNoteyNameByMidiNumber(noteNumber);
    const noteName = note.note;
    if (noteName === null) return;
    onMidiInput({ noteName, isMidiPressed });
  };

  const getNoteyNameByMidiNumber = (midiNumber) => {
    const key = [...whiteKeys, ...blackKeys].find(
      (k) => k.midiNumber === midiNumber,
    );
    return key ? { keyBind: key.keyBind, note: key.note } : null;
  };

  useEffect(() => {
    // Web MIDI not supported on IOS - iphone or ipad
    if (isIOS) {
      setPermissionStatus("denied");
      return;
    }

    navigator.permissions
      .query({ name: "midi", sysex: true })
      .then((result) => {
        if (result.state === "granted") {
          // If permission was previously granted, initialize MIDI immediately.
          setPermissionStatus("granted");
          return navigator.requestMIDIAccess({ sysex: true });
        } else if (result.state === "denied") {
          // If permission was previously denied.
          setPermissionStatus("denied");
          return null;
        } else if (result.state === "prompt") {
          // If permission has not been granted/denied yet
          setPermissionStatus("prompt");
          return null;
        }
      })
      .then((access) => {
        if (access) {
          if (!access) return;
          handleMidiStatus(access);
        }
      });
  }, []);

  const handleClick = () => {
    navigator.permissions
      .query({ name: "midi", sysex: true })
      .then((result) => {
        if (result.state === "prompt") {
          return navigator
            .requestMIDIAccess({ sysex: true })
            .then((access) => {
              setPermissionStatus("granted");
              return access;
            })
            .catch(() => {
              setPermissionStatus("denied");
              return null;
            });
        }
      })
      .then((access) => {
        if (!access) return;
        handleMidiStatus(access);
      });

    getMidiIcon();
  };

  const handleMidiStatus = (midiAccess) => {
    if (midiAccess) {
      midiAccess.inputs.forEach((input) => {
        input.onmidimessage = handleMidiMessage;
      });
    } else {
      midiAccess.inputs.forEach((input) => {
        input.onmidimessage = null;
      });
    }
  };

  const getMidiIcon = () => {
    switch (permissionStatus) {
      case "granted":
        return midiEnabledIcon;
      case "prompt":
        return midiPromptIcon;
      case "denied":
      default:
        return midiDisabledIcon;
    }
  };

  const getMidiTooltipText = () => {
    switch (permissionStatus) {
      case "granted":
        return "MIDI zařízení povoleno";
      case "prompt":
        return "Povolit MIDI zařízení";
      case "denied":
      default:
        return "MIDI zařízení zakázáno. Resetuj povolení v nastavení prohlížeče.";
    }
  };

  return (
    <>
      <NavIconTooltip text={getMidiTooltipText()}>
        <img
          src={getMidiIcon()}
          alt={`${permissionStatus} icon`}
          onClick={handleClick}
          disabled={permissionStatus !== "prompt"}
          className="menu-icon"
        />
      </NavIconTooltip>
    </>
  );
};

export default MidiListener;
