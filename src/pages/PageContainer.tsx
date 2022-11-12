import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { Box } from "@mui/material";

interface PageContainerProps {
  firstPage?: boolean;
  lastPage?: boolean;
}

const PageContainer = (props: React.PropsWithChildren<PageContainerProps>) => {
  const { pageIndex, setPageIndex } = useAppContext();

  function handleKeyEvent(e: KeyboardEvent) {
    if (e.code === "ArrowLeft") {
      if (!props.firstPage) {
        setPageIndex(pageIndex - 1);
      }
    }

    if (e.code === "ArrowRight") {
      if (!props.lastPage) {
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
    <Box p={4} pt={10} className="fade-in">
      {props.children}
    </Box>
  );
};

export default PageContainer;
