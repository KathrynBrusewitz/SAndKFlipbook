import React from "react";
import ReactDOM from "react-dom/client";
import "src/index.css";
import App from "src/App";
import { AppContext } from "src/context/AppContext";
import { AlertProvider } from "./context/AlertContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AlertProvider>
      <AppContext.Provider>
        <App />
      </AppContext.Provider>
    </AlertProvider>
  </React.StrictMode>
);
