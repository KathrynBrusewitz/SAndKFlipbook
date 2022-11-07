import React from "react";
import { Box, Grid } from "@mui/material";
import { useAppContext } from "../context/AppContext";

const TitlePage = () => {
  const { resetGameState, gameStateExists } = useAppContext();

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Box pt={20} pb={30}>
          <h1>Dear Siobhan,</h1>
        </Box>
      </Grid>
      {gameStateExists && (
        <Grid item>
          <button onClick={resetGameState}>Reset</button>
        </Grid>
      )}
    </Grid>
  );
};

export default TitlePage;
