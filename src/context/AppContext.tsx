import React, { useState } from "react";
import { createContainer } from "unstated-next";
import TitlePage from "../pages/TitlePage";
import HingePuzzle from "../pages/HingePuzzle";
import MatchPuzzle from "../pages/MatchPuzzle";
import MarryPuzzle from "../pages/MarryPuzzle";

function appContext() {
  const [pageIndex, setPageIndex] = useState(0);
  const pages: Array<JSX.Element> = [
    <TitlePage />,
    <HingePuzzle />,
    <MatchPuzzle />,
    <MarryPuzzle />,
  ];

  return { pageIndex, setPageIndex, pages };
}

export const AppContext = createContainer(appContext);

export const useAppContext = () => AppContext.useContainer();
