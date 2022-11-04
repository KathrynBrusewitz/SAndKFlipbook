import "./style.css";

import React from "react";
import { useAppContext } from "./context/AppContext";
import TitlePage from "./pages/TitlePage";
import PuzzlePage from "./pages/PuzzlePage";

function App() {
  const { pageIndex } = useAppContext();

  const pages: Array<JSX.Element> = [
    <TitlePage />,
    <PuzzlePage
      solution="HINGE"
      introIllustration={<h1>puzzle pic 1a</h1>}
      solvedIllustration={<h1>puzzle pic 1b</h1>}
    />,
    <PuzzlePage
      solution="MATCH"
      introIllustration={<h1>puzzle pic 2a</h1>}
      solvedIllustration={<h1>puzzle pic 2b</h1>}
    />,
    <PuzzlePage
      solution="TACOS"
      introIllustration={<h1>puzzle pic 3a</h1>}
      solvedIllustration={<h1>puzzle pic 3b</h1>}
    />,
    <PuzzlePage
      solution="MARRY"
      introIllustration={<h1>puzzle pic 4a</h1>}
      solvedIllustration={<h1>puzzle pic 4b</h1>}
      lastPage
    />,
  ];

  const CurrentPage = () => pages[pageIndex];

  return (
    <div>
      <CurrentPage />
    </div>
  );
}

export default App;
