import React from "react";
import { Box, Grid } from "@mui/material";
import { useAppContext } from "../context/AppContext";
import TitleBackground from "../assets/TitleBackground.png";

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
        <Box maxWidth={800}>
          <img src={TitleBackground} />
        </Box>
      </Grid>
      {gameStateExists && (
        <Grid item>
          <button onClick={resetGameState}>Reset Flipbook</button>
        </Grid>
      )}
    </Grid>
  );
};

export default TitlePage;
