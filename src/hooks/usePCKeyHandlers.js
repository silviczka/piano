import { useEffect } from "react";

const usePCKeyHandlers = (handleKeyDown, handleKeyUp) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);
};

export default usePCKeyHandlers;
