import playIcon from "./img/play.svg";
import pauseIcon from "./img/pause.png";
import NavIconTooltip from "../../NavIconTooltip/NavIconTooltip";

const PlayPauseBtn = () => {
  return (
    <>
      <NavIconTooltip text="Spustit hru.">
        <img src={playIcon} alt="play-icon" className="menu-icon" />
      </NavIconTooltip>
    </>
  );
};

export default PlayPauseBtn;
