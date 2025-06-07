import playIcon from "./img/play.svg";
import pauseIcon from "./img/pause.png";
import Tippy from "@tippyjs/react";

const PlayPauseBtn = ({ onPauseClick, isPaused, secondsLeft, disabled }) => {
  return (
    <>
      <Tippy content={isPaused ? "Hrát" : "Pauza"}>
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
      </Tippy>
    </>
  );
};

export default PlayPauseBtn;
