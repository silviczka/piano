import keyBindIconOn from "./img/keyBindIcon.svg";
import keyBindIconOff from "./img/keyBindIconOff.svg";
import Tippy from "@tippyjs/react";

const KeyBindLabelBtn = ({ areKeyBindLabelsVisible, onLabelClick }) => {
  return (
    <>
      <Tippy
        content={
          areKeyBindLabelsVisible
            ? "Vypnout klávesové zkratky."
            : "Zapnout klávesové zkratky."
        }
      >
        <img
          src={areKeyBindLabelsVisible ? keyBindIconOn : keyBindIconOff}
          alt={
            areKeyBindLabelsVisible
              ? "keyBind-labels-enabled-icon"
              : "keyBind-labels-disabled-icon"
          }
          onClick={onLabelClick}
          className="menu-icon"
        />
      </Tippy>
    </>
  );
};

export default KeyBindLabelBtn;
