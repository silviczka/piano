import colorEnabledIcon from "./img/keyColorEnabled.svg";
import colorDisabledIcon from "./img/keyColorDisabled.svg";
import NavIconTooltip from "../../NavIconTooltip/NavIconTooltip";

const ColorToggleBtn = ({ areColorsEnabled, onNoteColorClick }) => {
  return (
    <>
      <NavIconTooltip
        text={areColorsEnabled ? "Barvy jsou zapnuty." : "Barvy jsou vypnuty."}
      >
        <img
          src={areColorsEnabled ? colorEnabledIcon : colorDisabledIcon}
          alt={
            areColorsEnabled ? "colors-enabled-icon" : "colors-disabled-icon"
          }
          onClick={onNoteColorClick}
          className="menu-icon"
        />
      </NavIconTooltip>
    </>
  );
};

export default ColorToggleBtn;
