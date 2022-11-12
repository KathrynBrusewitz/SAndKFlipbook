import React from "react";
import { Box, Grid } from "@mui/material";
import { useAppContext } from "../context/AppContext";
import Title from "../assets/Title---Animated.gif";

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
          <img src={Title} />
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
