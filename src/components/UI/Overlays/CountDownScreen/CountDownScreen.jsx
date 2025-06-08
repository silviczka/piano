import { useEffect, useState } from "react";
import "./CountDownScreen.css";

const CountdownScreen = ({ duration }) => {
  const [secondsLeft, setSecondsLeft] = useState(duration);

  useEffect(() => {
    if (secondsLeft === 0) {
      return;
    }

    const timer = setTimeout(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsLeft]);

  return (
    <div className="countdown">{secondsLeft === 0 ? "Hrej!" : secondsLeft}</div>
  );
};
export default CountdownScreen;
