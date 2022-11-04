import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import classNames from "classnames";

const TitlePage = () => {
  const { setPageIndex, resetGameState } = useAppContext();
  const [intro, setIntro] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    setIntro(true);

    setTimeout(() => {
      setIntro(false);
    }, 2000);
  }, []);

  function handleKeyEvent(e: KeyboardEvent) {
    if (e.code === "ArrowRight") {
      setExit(true);

      // Go to next page after animation finishes
      setTimeout(() => {
        setPageIndex(1);
      }, 2000);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyEvent);
    return () => {
      document.removeEventListener("keydown", handleKeyEvent);
    };
  }, [handleKeyEvent]);

  return (
    <div
      className={classNames("main-wrapper", {
        "fade-out": exit,
        "fade-in": intro,
      })}
    >
      <h1>Use the arrow keys to navigate</h1>
      <button onClick={resetGameState}>Reset</button>
    </div>
  );
};

export default TitlePage;
