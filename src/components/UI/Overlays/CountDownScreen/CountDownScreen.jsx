import { useEffect, useState } from "react";

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

  return <>{secondsLeft === 0 ? "Start!" : secondsLeft}</>;
};
export default CountdownScreen;
