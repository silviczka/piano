import "./Timer.css";

import { useState, useEffect, useRef } from "react";

const Timer = ({
  totalTime,
  isPaused,
  onSongCountDown,
  isRestarted,
  onRestart,
  gameMode,
}) => {
  const [currentFill, setCurrentFill] = useState(0);
  const [timePassed, setTimePassed] = useState(0);
  let startTimeRef = useRef(Date.now());

  useEffect(() => {
    onSongCountDown(totalTime);
  }, [totalTime]);

  useEffect(() => {
    if (isRestarted) {
      setTimePassed(0);
      setCurrentFill(0);
      startTimeRef.current = Date.now();
      onRestart(false);
    }
  }, [isRestarted]);

  useEffect(() => {
    const update = () => {
      const now = Date.now();
      const delta = now - startTimeRef.current;

      if (isPaused) return;

      const newTimePassed = Math.min(delta, totalTime * 1000);
      setTimePassed(newTimePassed);

      const secondsLeft = Math.ceil(totalTime - newTimePassed / 1000);
      onSongCountDown(secondsLeft);
    };

    if (!isPaused) {
      startTimeRef.current = Date.now() - timePassed;
    }

    const interval = setInterval(update, 100);
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const percentage = (timePassed / (totalTime * 1000)) * 100;
    setCurrentFill(percentage);
  }, [timePassed, isRestarted]);

  return (
    <div className="timer-wrapper">
      <div
        className={
          gameMode === "tutorial"
            ? "timer-container timer-container-disabled"
            : "timer-container"
        }
      >
        <div className="timer-bar" style={{ width: `${currentFill}%` }}></div>
      </div>
    </div>
  );
};

export default Timer;
