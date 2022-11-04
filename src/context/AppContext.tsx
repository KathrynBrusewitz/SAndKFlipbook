import { useState } from "react";
import { createContainer } from "unstated-next";

function appContext() {
  const [pageIndex, setPageIndex] = useState(0);

  return { pageIndex, setPageIndex };
}

export const AppContext = createContainer(appContext);

export const useAppContext = () => AppContext.useContainer();
