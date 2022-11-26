import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import WordleGame from "../wordle/WordleGame";
import classNames from "classnames";
import { Box, Grid } from "@mui/material";
import RestartButton from "../assets/RestartButton.png";
import { Solutions } from "../context/GameStateStorage";
import PurpleBackground from "../assets/PurpleBackground.jpg";
import BlueBackground from "../assets/BlueBackground.jpg";
import CobbleStoneBackground from "../assets/CobbleStoneBackground.jpg";

const PuzzleArrows = () => {
  const { pageIndex, setPageIndex } = useAppContext();

  function goLeft(): void {
    setPageIndex(pageIndex - 1);
  }

  function goRight(): void {
    setPageIndex(pageIndex + 1);
  }

  return (
    <Grid container wrap="nowrap" justifyContent="space-between">
      <Grid item>
        <button onClick={goLeft}>
          <Box fontSize={80} px={2} color="#f2f2f2">{`<`}</Box>
        </button>
      </Grid>

      <Grid item>
        <button onClick={goRight}>
          <Box fontSize={80} px={2} color="#f2f2f2">{`>`}</Box>
        </button>
      </Grid>
    </Grid>
  );
};

interface PuzzlePageProps {
  solution: string;
}

const PuzzlePage = ({ solution }: PuzzlePageProps) => {
  const { pageIndex, setPageIndex } = useAppContext();
  const [wordleWon, setWordleWon] = useState(false);
  const [wordleLost, setWordleLost] = useState(false);

  function puzzleNumberText(): string {
    const solutionIndex = Solutions.indexOf(solution);
    return `${solutionIndex + 1} out of ${Solutions.length}`;
  }

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

  function getBackgroundImage(): string {
    const solutionIndex = Solutions.indexOf(solution);
    if (solutionIndex <= 0 || solutionIndex === 3) {
      return PurpleBackground;
    }
    if (solutionIndex === 1 || solutionIndex === 4) {
      return BlueBackground;
    }
    return CobbleStoneBackground;
  }

  return (
    <>
      <Box
        style={{
          backgroundImage: `url(${getBackgroundImage()})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          className={classNames("fade-in")}
          pt={4}
          pb={6}
          textAlign="center"
          color="#f2f2f2"
        >
          {puzzleNumberText()}
        </Box>
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
        <PuzzleArrows />
      </Box>
    </>
  );
};

export default PuzzlePage;
