import keyBindIconOn from "./img/keyBindIcon.svg";
import keyBindIconOff from "./img/keyBindIconOff.svg";

const KeyBindLabelBtn = ({ areKeyBindLabelsVisible, onLabelClick }) => {
  return (
    <>
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
    </>
  );
};

export default KeyBindLabelBtn;
