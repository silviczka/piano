import keyBindIconOn from "./img/keyBindIcon.svg";
import keyBindIconOff from "./img/keyBindIconOff.svg";

const KeyBindLabelBtn = () => {
  return (
    <>
      <img
        src={keyBindIconOn}
        alt="keyBind-labels-enabled-icon"
        className="menu-icon"
      />
    </>
  );
};

export default KeyBindLabelBtn;
