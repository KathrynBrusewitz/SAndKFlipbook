import { useState } from "react";
import { createContainer } from "unstated-next";
import {
  loadGameStorage,
  PageStorageKey,
  resetGameStorage,
  saveGameStorage,
  gameStateExistsStorage,
} from "./GameStateStorage";

function appContext() {
  const [pageIndex, setPageIndex] = useState<number>(() => {
    const pageState = localStorage.getItem(PageStorageKey);
    return pageState ? (JSON.parse(pageState) as number) : 0;
  });

  const [gameStateExists, setGameStateExists] = useState<boolean>(() => {
    return gameStateExistsStorage;
  });

  const saveGameState = (key: string, guesses: string[]) => {
    saveGameStorage(key, guesses);
    setGameStateExists(true);
  };

  const loadGameState = (key: string) => {
    return loadGameStorage(key);
  };

  const resetGameState = () => {
    resetGameStorage();
    setGameStateExists(false);
  };

  return {
    pageIndex,
    setPageIndex,
    saveGameState,
    loadGameState,
    resetGameState,
    gameStateExists,
  };
}

export const AppContext = createContainer(appContext);

export const useAppContext = () => AppContext.useContainer();
