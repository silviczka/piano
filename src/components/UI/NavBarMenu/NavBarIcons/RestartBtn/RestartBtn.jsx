import restartIcon from "./img/restart.svg";
import Tippy from "@tippyjs/react";

const RestartBtn = ({ onRestartClick, disabled }) => {
  return (
    <Tippy content="Restartovat hru.">
      <img
        src={restartIcon}
        alt="restart-icon"
        onClick={disabled ? undefined : onRestartClick}
        className="menu-icon"
      />
    </Tippy>
  );
};

export default RestartBtn;
