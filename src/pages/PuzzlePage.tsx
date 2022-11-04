import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import classNames from "classnames";
import WordleGame from "../wordle/WordleGame";
import Div100vh from "react-div-100vh";

interface PuzzlePageProps {
  solution: string;
  introIllustration: JSX.Element;
  solvedIllustration: JSX.Element;
  lastPage?: boolean;
}

const PuzzlePage = ({
  solution,
  introIllustration,
  solvedIllustration,
  lastPage = false,
}: PuzzlePageProps) => {
  const { pageIndex, setPageIndex } = useAppContext();
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
        setPageIndex(pageIndex - 1);
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

      if (showWordleWin && !lastPage) {
        setPageIndex(pageIndex + 1);
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
            {introIllustration}
          </div>
        )}
        {showWordle && (
          <div className={classNames({ "fade-in": showWordle })}>
            <WordleGame
              solution={solution}
              onWin={() => {
                setShowWordle(false);
                setShowWordleWin(true);
              }}
            />
          </div>
        )}
        {showWordleWin && (
          <div className={classNames({ "fade-in": showWordleWin })}>
            {solvedIllustration}
          </div>
        )}
      </div>
    </Div100vh>
  );
};

export default PuzzlePage;
