import OverlayScreen from "../OverlayScreen/OverlayScreen";
import CountdownScreen from "../CountDownScreen/CountDownScreen";
import { COUNTDOWN_DURATION } from "../../../../constants/constants";
import { useEffect, useState } from "react";

const OverlayScreens = ({ isPaused, isResuming, songTimeCountDown, score }) => {
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
  return (
    <>
      {isPaused && !isResuming && (
        <OverlayScreen>Hra je pozastavená</OverlayScreen>
      )}
      {isResuming && (
        <OverlayScreen>
          <CountdownScreen duration={COUNTDOWN_DURATION} />
        </OverlayScreen>
      )}
      {showOverlay && (
        <OverlayScreen>Konec hry. Získal/a jsi {score} bodů.</OverlayScreen>
      )}
    </>
  );
};

export default OverlayScreens;
