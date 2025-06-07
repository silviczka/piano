import colorEnabledIcon from "./img/keyColorEnabled.svg";
import colorDisabledIcon from "./img/keyColorDisabled.svg";

const ColorToggleBtn = () => {
  return (
    <>
      <img
        src={colorEnabledIcon}
        alt="colors-enabled-icon"
        className="menu-icon"
      />
    </>
  );
};

export default ColorToggleBtn;
