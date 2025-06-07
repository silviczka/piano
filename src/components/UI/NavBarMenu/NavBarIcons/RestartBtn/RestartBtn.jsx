import restartIcon from "./img/restart.svg";

const RestartBtn = ({ onRestartClick, disabled }) => {
  return (
    <img
      src={restartIcon}
      alt="restart-icon"
      onClick={disabled ? undefined : onRestartClick}
      className="menu-icon"
    />
  );
};

export default RestartBtn;
