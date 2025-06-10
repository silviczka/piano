import OverlayScreen from "../OverlayScreen/OverlayScreen";
import CountdownScreen from "../CountDownScreen/CountDownScreen";
import { COUNTDOWN_DURATION } from "../../../../constants/constants";
import { useEffect, useState } from "react";
import playIcon from "./img/playBtnBig.webp";
import foxEnd from "./img/foxEnd.webp";
import "./OverlayScreens.css";

const OverlayScreens = ({
  isPaused,
  isResuming,
  songTimeCountDown,
  score,
  onPauseClick,
  onRestartClick,
  onSongsMenuOpen,
  notesNum,
  gameMode,
  restartBtnClicked,
}) => {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (songTimeCountDown === 0) {
      const timeoutId = setTimeout(() => {
        setShowOverlay(true);
      }, 1500);

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
        <OverlayScreen zIndex={99}>
          <img
            src={playIcon}
            alt="playIcon"
            className="play-icon play-icon-overlay"
            onClick={onPauseClick}
          />
        </OverlayScreen>
      )}
      {isResuming && (
        <OverlayScreen zIndex={99}>
          <CountdownScreen duration={COUNTDOWN_DURATION} />
        </OverlayScreen>
      )}
      {gameMode === "normal" && showOverlay && (
        <OverlayScreen zIndex={101}>
          <div className="end-game-wrapper">
            <div>Konec hry.</div>
            <div className="end-game-score-wrapper">
              <div>Počet získaných bodů: </div>
              <div className="end-game-score">
                &nbsp;{score} / {notesNum}
              </div>
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
