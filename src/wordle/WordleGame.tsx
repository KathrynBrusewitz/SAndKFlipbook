import "./WordleGame.css";

import { default as GraphemeSplitter } from "grapheme-splitter";
import React, { useEffect, useState } from "react";
import Div100vh from "react-div-100vh";

import { AlertContainer } from "./components/alerts/AlertContainer";
import { Grid } from "./components/grid/Grid";
import { Keyboard } from "./components/keyboard/Keyboard";
import {
  ALERT_TIME_MS,
  MAX_CHALLENGES,
  REVEAL_TIME_MS,
} from "./constants/settings";
import {
  CORRECT_WORD_MESSAGE,
  NOT_ENOUGH_LETTERS_MESSAGE,
  WORD_NOT_FOUND_MESSAGE,
} from "./constants/strings";
import { useAlert } from "../context/AlertContext";
import {
  isWordInWordList,
  localeAwareUpperCase,
  unicodeLength,
} from "./lib/words";
import { useAppContext } from "../context/AppContext";

interface WordleProps {
  solution: string;
  onWin: () => void;
}

function WordleGame(props: WordleProps) {
  const { saveGameState, loadGameState } = useAppContext();
  const solution = localeAwareUpperCase(props.solution);
  const { showError: showErrorAlert, showSuccess: showSuccessAlert } =
    useAlert();
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameWon, setIsGameWon] = useState(false);
  const [currentRowClass, setCurrentRowClass] = useState("");
  const [isGameLost, setIsGameLost] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);
  const [guesses, setGuesses] = useState<string[]>(() => {
    const loaded = loadGameState(solution);
    if (!loaded) {
      return [];
    }
    const gameWasWon = loaded.includes(solution);
    if (gameWasWon) {
      setIsGameWon(true);
    }
    const gameWasLost = loaded.length === MAX_CHALLENGES && !gameWasWon;
    if (gameWasLost) {
      setIsGameLost(true);
      showErrorAlert(CORRECT_WORD_MESSAGE(solution), {
        durationMs: ALERT_TIME_MS,
      });
    }
    return loaded;
  });

  const clearCurrentRowClass = () => {
    setCurrentRowClass("");
  };
  const isWinningWord = (word: string) => {
    return solution === word;
  };

  useEffect(() => {
    saveGameState(solution, guesses);
  }, [guesses]);

  useEffect(() => {
    if (isGameWon) {
      props.onWin();
    }

    if (isGameLost) {
      setTimeout(() => {
        // showErrorAlert("you lost :("); // TODO: show button to start over
      }, (solution.length + 1) * REVEAL_TIME_MS);
    }
  }, [isGameWon, isGameLost, showSuccessAlert]);

  const onChar = (value: string) => {
    if (
      unicodeLength(`${currentGuess}${value}`) <= solution.length &&
      guesses.length < MAX_CHALLENGES &&
      !isGameWon
    ) {
      setCurrentGuess(`${currentGuess}${value}`);
    }
  };

  const onDelete = () => {
    setCurrentGuess(
      new GraphemeSplitter().splitGraphemes(currentGuess).slice(0, -1).join("")
    );
  };

  const onEnter = () => {
    if (isGameWon || isGameLost) {
      return;
    }

    if (!(unicodeLength(currentGuess) === solution.length)) {
      setCurrentRowClass("jiggle");
      return showErrorAlert(NOT_ENOUGH_LETTERS_MESSAGE, {
        onClose: clearCurrentRowClass,
      });
    }

    if (!isWordInWordList(currentGuess)) {
      setCurrentRowClass("jiggle");
      return showErrorAlert(WORD_NOT_FOUND_MESSAGE, {
        onClose: clearCurrentRowClass,
      });
    }

    setIsRevealing(true);
    // turn this back off after all
    // chars have been revealed
    setTimeout(() => {
      setIsRevealing(false);
    }, REVEAL_TIME_MS * solution.length);

    const winningWord = isWinningWord(currentGuess);

    if (
      unicodeLength(currentGuess) === solution.length &&
      guesses.length < MAX_CHALLENGES &&
      !isGameWon
    ) {
      setGuesses([...guesses, currentGuess]);
      setCurrentGuess("");

      if (winningWord) {
        return setIsGameWon(true);
      }

      if (guesses.length === MAX_CHALLENGES - 1) {
        setIsGameLost(true);
        showErrorAlert(CORRECT_WORD_MESSAGE(solution), {
          persist: true,
          delayMs: REVEAL_TIME_MS * solution.length + 1,
        });
      }
    }
  };

  return (
    <Div100vh>
      <div className="game flex h-full flex-col">
        <div className="mx-auto flex w-full grow flex-col px-1 pt-2 pb-8 sm:px-6 md:max-w-7xl lg:px-8 short:pb-2 short:pt-2">
          <div className="flex grow flex-col justify-center pb-6 short:pb-2">
            <Grid
              solution={solution}
              guesses={guesses}
              currentGuess={currentGuess}
              isRevealing={isRevealing}
              currentRowClassName={currentRowClass}
            />
          </div>
          <Keyboard
            onChar={onChar}
            onDelete={onDelete}
            onEnter={onEnter}
            solution={solution}
            guesses={guesses}
            isRevealing={isRevealing}
          />
          <AlertContainer />
        </div>
      </div>
    </Div100vh>
  );
}

export default WordleGame;
