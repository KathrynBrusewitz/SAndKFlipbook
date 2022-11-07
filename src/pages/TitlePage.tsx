import React from "react";
import { useAppContext } from "../context/AppContext";
import { Box, Grid } from "@mui/material";

const TitlePage = () => {
  const { resetGameState } = useAppContext();

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
      <Grid item>
        <button onClick={resetGameState}>Reset</button>
      </Grid>
    </Grid>
  );
};

export default TitlePage;
