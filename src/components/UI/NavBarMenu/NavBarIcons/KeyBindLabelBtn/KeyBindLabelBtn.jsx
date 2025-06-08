import keyBindIconOn from "./img/keyBindIcon.svg";
import keyBindIconOff from "./img/keyBindIconOff.svg";
import NavIconTooltip from "../../NavIconTooltip/NavIconTooltip";

const KeyBindLabelBtn = ({ areKeyBindLabelsVisible, onLabelClick }) => {
  return (
    <>
      <NavIconTooltip
        text={
          areKeyBindLabelsVisible
            ? "Vypnout klávesové zkratky"
            : "Zapnout klávesové zkratky"
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
      </NavIconTooltip>
    </>
  );
};

export default KeyBindLabelBtn;
