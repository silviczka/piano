import OverlayScreen from "../OverlayScreen/OverlayScreen";
import CountdownScreen from "../CountDownScreen/CountDownScreen";
import { COUNTDOWN_DURATION } from "../../../../constants/constants";
import { useEffect, useState } from "react";
import playIcon from "./img/playBtnBig.png";
import foxEnd from "./img/foxEnd.png";
import "./OverlayScreens.css";

const OverlayScreens = ({
  isPaused,
  isResuming,
  songTimeCountDown,
  score,
  onPauseClick,
  onRestartClick,
  onSongsMenuOpen,
}) => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (songTimeCountDown === 0) {
      const timeoutId = setTimeout(() => {
        setShowOverlay(true);
      }, 3500);

      return () => clearTimeout(timeoutId);
    } else {
      setShowOverlay(false);
    }
  }, [songTimeCountDown]);

  const handleEndOverlayClick = () => {
    setShowOverlay(false);
    onSongsMenuOpen();
  };
  return (
    <>
      {isPaused && !isResuming && (
        <OverlayScreen>
          <img
            src={playIcon}
            alt="playIcon"
            className="play-icon"
            onClick={onPauseClick}
          />
        </OverlayScreen>
      )}
      {isResuming && (
        <OverlayScreen>
          <CountdownScreen duration={COUNTDOWN_DURATION} />
        </OverlayScreen>
      )}
      {showOverlay && (
        <OverlayScreen>
          <div className="end-game-wrapper">
            <div>Konec hry.</div>
            <div className="end-game-score-wrapper">
              <div>Počet získaných bodů:</div>
              <div className="end-game-score">{score}</div>
            </div>
            <img
              className="end-game-img"
              src={foxEnd}
              alt="sitting fox with stars"
            />
            <div className="end-game-buttons">
              <button
                className="end-button end-button-primary"
                onClick={onRestartClick}
              >
                Hrát znovu
              </button>
              <button
                className="end-button end-button-secondary"
                onClick={handleEndOverlayClick}
              >
                Vybrat novou písničku
              </button>
            </div>
          </div>
        </OverlayScreen>
      )}
    </>
  );
};

export default OverlayScreens;
