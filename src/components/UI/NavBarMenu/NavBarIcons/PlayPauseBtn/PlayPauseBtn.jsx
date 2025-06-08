import playIcon from "./img/play.svg";
import pauseIcon from "./img/pause.png";
import NavIconTooltip from "../../NavIconTooltip/NavIconTooltip";

const PlayPauseBtn = ({ onPauseClick, isPaused, secondsLeft, disabled }) => {
  return (
    <>
      <NavIconTooltip text={isPaused ? "Spustit hru" : "Pozastavit hru"}>
        <img
          src={secondsLeft === 0 ? playIcon : isPaused ? playIcon : pauseIcon}
          alt={
            secondsLeft === 0
              ? "play-icon"
              : isPaused
              ? "play-icon"
              : "pause-icon"
          }
          className="menu-icon"
          onClick={disabled ? undefined : onPauseClick}
        />
      </NavIconTooltip>
    </>
  );
};

export default PlayPauseBtn;
