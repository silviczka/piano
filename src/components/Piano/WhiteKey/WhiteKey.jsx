import "./WhiteKey.css";
import { forwardRef } from "react";
import PCKeyLabel from "../Labels/PCKeyLabel/PCKeyLabel";
import ColorLabel from "../Labels/ColorLabel/ColorLabel";
import NoteNameLabel from "../Labels/NoteNameLabel/NoteNameLabel";

const WhiteKey = forwardRef(
  (
    {
      offset,
      color,
      note,
      type,
      keyBind,
      areNoteLabelsVisible,
      isColorVisible,
      areKeyBindLabelsVisible,
      ...handlers
    },
    ref,
  ) => {
    return (
      <div className="key-wrapper">
        <svg
          ref={ref}
          {...handlers}
          className="key white"
          style={{
            overflow: "visible",
            "--key-color": color,
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="300"
          viewBox="0 0 100 300"
        >
          <ColorLabel
            color={color}
            isColorVisible={isColorVisible}
            type={type}
          />
          <NoteNameLabel
            note={note}
            isNoteLabelVisible={areNoteLabelsVisible}
            type={type}
            isColorVisible={isColorVisible}
          />
          <PCKeyLabel
            type={type}
            keyBind={keyBind}
            isKeyBindLabelVisible={areKeyBindLabelsVisible}
          />
        </svg>

        <div className="key key-extension"></div>
      </div>
    );
  },
);

export default WhiteKey;
