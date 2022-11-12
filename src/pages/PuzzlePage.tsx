import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import WordleGame from "../wordle/WordleGame";
import classNames from "classnames";
import { Box, Grid } from "@mui/material";
import RestartButton from "../assets/RestartButton.png";

interface PuzzlePageProps {
  solution: string;
}

const PuzzlePage = ({ solution }: PuzzlePageProps) => {
  const { pageIndex, setPageIndex } = useAppContext();
  const [wordleWon, setWordleWon] = useState(false);
  const [wordleLost, setWordleLost] = useState(false);

  function restartGame() {
    localStorage.removeItem(solution);
    setWordleLost(false);
  }

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
    <div>
      {wordleLost && (
        <div className={classNames("fade-in")}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ height: "100vh" }}
            textAlign="center"
          >
            <button onClick={restartGame}>
              <Box maxWidth={140}>
                <img src={RestartButton} />
              </Box>
            </button>
          </Grid>
        </div>
      )}
      {!wordleLost && (
        <div className={classNames("fade-in")}>
          <WordleGame
            solution={solution}
            onWin={() => {
              setWordleWon(true);
            }}
            onLose={() => {
              setWordleLost(true);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PuzzlePage;
