import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import classNames from "classnames";
import WordleGame from "src/wordle/WordleGame";
import Div100vh from "react-div-100vh";

const MatchPuzzle = () => {
  const { setPageIndex } = useAppContext();
  const [intro, setIntro] = useState(false);
  const [showWordle, setShowWordle] = useState(false);
  const [showWordleWin, setShowWordleWin] = useState(false);

  useEffect(() => {
    setIntro(true);
    setShowWordle(false);
    setShowWordleWin(false);
  }, []);

  function handleKeyEvent(e: KeyboardEvent) {
    if (e.code === "ArrowLeft") {
      if (intro) {
        setPageIndex(1);
      }
      if (showWordle || showWordleWin) {
        setIntro(true);
        setShowWordle(false);
        setShowWordleWin(false);
      }
    }

    if (e.code === "ArrowRight") {
      if (intro) {
        setIntro(false);
        setShowWordle(true);
        setShowWordleWin(false);
      }

      if (showWordleWin) {
        setPageIndex(3);
      }
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyEvent);
    return () => {
      document.removeEventListener("keydown", handleKeyEvent);
    };
  }, [handleKeyEvent]);

  return (
    <Div100vh>
      <div className="main-wrapper">
        {intro && (
          <div className={classNames({ "fade-in": intro })}>
            <h1>Show illustration leading up to wordle 2</h1>
          </div>
        )}
        {showWordle && (
          <WordleGame
            solution="MATCH"
            onWin={() => {
              setShowWordle(false);
              setShowWordleWin(true);
            }}
          />
        )}
        {showWordleWin && (
          <div>
            <h1>It was a match!</h1>
          </div>
        )}
      </div>
    </Div100vh>
  );
};

export default MatchPuzzle;
