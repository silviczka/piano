import colorEnabledIcon from "./img/keyColorEnabled.svg";
import colorDisabledIcon from "./img/keyColorDisabled.svg";
import Tippy from "@tippyjs/react";

const ColorToggleBtn = ({ areColorsEnabled, onNoteColorClick }) => {
  return (
    <>
      <Tippy content={areColorsEnabled ? "Vypnout barvy." : "Zapnout barvy."}>
        <img
          src={areColorsEnabled ? colorEnabledIcon : colorDisabledIcon}
          alt={
            areColorsEnabled ? "colors-enabled-icon" : "colors-disabled-icon"
          }
          onClick={onNoteColorClick}
          className="menu-icon"
        />
      </Tippy>
    </>
  );
};

export default ColorToggleBtn;
