import colorEnabledIcon from "./img/keyColorEnabled.svg";
import colorDisabledIcon from "./img/keyColorDisabled.svg";

const ColorToggleBtn = ({ areColorsEnabled, onNoteColorClick }) => {
  return (
    <>
      <img
        src={areColorsEnabled ? colorEnabledIcon : colorDisabledIcon}
        alt={areColorsEnabled ? "colors-enabled-icon" : "colors-disabled-icon"}
        onClick={onNoteColorClick}
        className="menu-icon"
      />
    </>
  );
};

export default ColorToggleBtn;
