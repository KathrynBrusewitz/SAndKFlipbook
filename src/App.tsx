import "./style.css";

import React from "react";
import { useAppContext } from "./context/AppContext";

function App() {
  const { pages, pageIndex } = useAppContext();

  const CurrentPage = () => pages[pageIndex];

  return (
    <div>
      <CurrentPage />
    </div>
  );
}

export default App;
