import React from "react";
import { useAppContext } from "../context/AppContext";
import { Box, Grid } from "@mui/material";

interface ArrowsProps {
  firstPage?: boolean;
  lastPage?: boolean;
}

const Arrows = (props: React.PropsWithChildren<ArrowsProps>) => {
  const { pageIndex, setPageIndex } = useAppContext();

  function goLeft(): void {
    setPageIndex(pageIndex - 1);
  }

  function goRight(): void {
    setPageIndex(pageIndex + 1);
  }

  function showLeft(): boolean {
    return !props.firstPage;
  }

  function showRight(): boolean {
    return !props.lastPage;
  }

  return (
    <>
      <Box sx={{ display: { xs: "block", sm: "none" } }} pb={10}>
        <Grid container direction="column">
          <Grid item>{props.children}</Grid>
          <Grid item>
            <Grid container wrap="nowrap" justifyContent="space-between">
              <Grid item>
                {showLeft() && (
                  <button onClick={goLeft}>
                    <Box fontSize={80} px={2} color="#444">{`<`}</Box>
                  </button>
                )}
              </Grid>

              <Grid item>
                {showRight() && (
                  <button onClick={goRight}>
                    <Box fontSize={80} px={2} color="#444">{`>`}</Box>
                  </button>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Grid
          container
          wrap="nowrap"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            {showLeft() && (
              <button onClick={goLeft}>
                <Box fontSize={60} px={2} color="#444">{`<`}</Box>
              </button>
            )}
          </Grid>
          <Grid item>{props.children}</Grid>
          <Grid item>
            {showRight() && (
              <button onClick={goRight}>
                <Box fontSize={60} px={2} color="#444">{`>`}</Box>
              </button>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Arrows;
