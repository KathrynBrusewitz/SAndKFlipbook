import { useState } from "react";
import { createContainer } from "unstated-next";

function appContext() {
  const [pageIndex, setPageIndex] = useState(0);

  const saveGameState = (key: string, guesses: string[]) => {
    localStorage.setItem(key, JSON.stringify(guesses));
  };

  const loadGameState = (key: string) => {
    const state = localStorage.getItem(key);
    return state ? (JSON.parse(state) as string[]) : null;
  };

  const resetGameState = () => {
    localStorage.clear();
  };

  return {
    pageIndex,
    setPageIndex,
    saveGameState,
    loadGameState,
    resetGameState,
  };
}

export const AppContext = createContainer(appContext);

export const useAppContext = () => AppContext.useContainer();
