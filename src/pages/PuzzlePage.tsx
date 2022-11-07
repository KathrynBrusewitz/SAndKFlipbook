import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import WordleGame from "../wordle/WordleGame";
import classNames from "classnames";

interface PuzzlePageProps {
  solution: string;
}

const PuzzlePage = ({ solution }: PuzzlePageProps) => {
  const { pageIndex, setPageIndex } = useAppContext();
  const [wordleWon, setWordleWon] = useState(false);

  function handleKeyEvent(e: KeyboardEvent) {
    if (e.code === "ArrowLeft") {
      setPageIndex(pageIndex - 1);
    }

    if (e.code === "ArrowRight") {
      if (wordleWon) {
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
    <div className="main-wrapper">
      <div className={classNames("fade-in")}>
        <WordleGame
          solution={solution}
          onWin={() => {
            setWordleWon(true);
          }}
        />
      </div>
    </div>
  );
};

export default PuzzlePage;
