import restartIcon from "./img/restart.svg";
import NavIconTooltip from "../../NavIconTooltip/NavIconTooltip";

const RestartBtn = ({ onRestartClick, disabled }) => {
  return (
    <NavIconTooltip text="Restartovat hru.">
      <img
        src={restartIcon}
        alt="restart-icon"
        onClick={disabled ? undefined : onRestartClick}
        className="menu-icon"
      />
    </NavIconTooltip>
  );
};

export default RestartBtn;
