import React, { useEffect } from "react";
import { useAppContext } from "./context/AppContext";
import TitlePage from "./pages/TitlePage";
import PageContainer from "./pages/PageContainer";
import { Box, Grid } from "@mui/material";
import Green from "./pages/components/Green";
import PuzzlePage from "./pages/PuzzlePage";
import { saveCurrentPage, Solutions } from "./context/GameStateStorage";
import WorkLaptop from "./assets/WorkingAtDesk.png";
import Subway from "./assets/Subway.png";

function App() {
  const { pageIndex } = useAppContext();

  useEffect(() => {
    saveCurrentPage(pageIndex);
  }, [pageIndex]);

  const pages: Array<JSX.Element> = [
    <PageContainer firstPage>
      <TitlePage />
    </PageContainer>,
    <PageContainer>
      <Grid container alignItems="center">
        <Grid item xs={6} textAlign="center">
          <img src={WorkLaptop} />
        </Grid>
        <Grid item xs={6}>
          <p>
            I had this idea of illustrating our story together so far. It’s a
            little flipbook of memories that I have of us.
          </p>
        </Grid>
      </Grid>
    </PageContainer>,
    <PageContainer>
      <Grid container alignItems="center">
        <Grid item xs={6} textAlign="center">
          <img src={Subway} />
        </Grid>
        <Grid item xs={6}>
          <p>
            I know how much you enjoy wordles, whether it’s on the subway to
            pass the time or first thing upon waking up in the morning, so I
            included a few for you to solve as you flip through.
          </p>
          <p>
            Maybe you can guess where I am going to <Green>start</Green>...
          </p>
        </Grid>
      </Grid>
    </PageContainer>,
    <PuzzlePage solution={Solutions[0]} />,
    <PageContainer>
      <Grid container alignItems="center">
        <Grid item xs={6} textAlign="center">
          [our phones with our profiles]
        </Grid>
        <Grid item xs={6}>
          <p>
            In this city of over 18 million people, I find it remarkable how we
            found each other. After a long time spent isolated in my Seattle
            apartment, I decided to venture across the country for just a week.
            Not expecting anything, I opened the app. I am so glad I did.
          </p>
          <p>
            I fell for the kindness in your eyes, the honesty in your answers,
            and the bravery of your ambitions. You have no idea how joyous I was
            that you took a chance on me and we were a <Green>match</Green>.
          </p>
        </Grid>
      </Grid>
    </PageContainer>,
    <PuzzlePage solution={Solutions[1]} />,
    <PageContainer>
      <Grid container alignItems="center">
        <Grid item xs={6} textAlign="center">
          [facetiming in our apartments]
        </Grid>
        <Grid item xs={6}>
          <p>
            Our very first date actually happened 2400 miles apart. Six hours
            here, eight hours there. Not a day passed where we didn’t talk about
            anything and everything over the <Green>phone</Green>.
          </p>
        </Grid>
        <Grid item xs={6} textAlign="center">
          [US map with trip lines, or boarding tickets]
        </Grid>
        <Grid item xs={6}>
          <p>
            It didn’t take long for me to book another ticket, becoming the
            first of many. Every visit was worth the six hour red eyes, but I am
            so glad we no longer have to do that anymore.
          </p>
        </Grid>
      </Grid>
    </PageContainer>,
    <PuzzlePage solution={Solutions[2]} />,
    <PageContainer>
      <Grid container alignItems="center">
        <Grid item xs={6} textAlign="center">
          <Grid container direction="column">
            <Grid item>[tacos at tacombi’s]</Grid>
            <Grid item>[us walking in the city]</Grid>
            <Grid item>[cloisters]</Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <p>
            On a crisp, autumn day in New York, we went on our first date
            together walking the bustling streets. You took me to your most
            favorite place for <Green>tacos</Green> in the upper west side. We
            were both so nervous, but eventually I worked up the courage to ask
            if I could hold your hand.
          </p>
        </Grid>
      </Grid>
    </PageContainer>,
    <PuzzlePage solution={Solutions[3]} />,
    <PageContainer>
      <Grid container alignItems="center">
        <Grid item xs={6} textAlign="center">
          <Grid container direction="column">
            <Grid item>[drinking coffee at a table]</Grid>
            <Grid item>
              [sitting in the park, reading books, drinking coffee]
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <p>
            We never go without grabbing a morning <Green>latte</Green> and a
            freshly baked pastry together. It’s my favorite cozy, daily ritual
            with you. Sometimes we’d go to the park with books we’ve collected
            along the way, enjoying each other’s company while being in our own
            little worlds.
          </p>
        </Grid>
      </Grid>
    </PageContainer>,
    <PuzzlePage solution={Solutions[4]} />,
    <PageContainer>
      <Grid container alignItems="center">
        <Grid item xs={6} textAlign="center">
          [world map, with stickies and photos, like our miro board]
        </Grid>
        <Grid item xs={6}>
          <p>
            Sometimes we are able to venture out of the city. We’ve climbed the
            snow-packed, evergreen mountains in the Pacific Northwest, hiked
            through the beautiful hills of the Northeast, tinged with golden
            yellows and deep reds, and even braved the waves of the Atlantic
            ocean.
          </p>
          <p>
            I can’t wait to travel the <Green>world</Green> with you and enjoy
            many more lattes, books, and trails together.
          </p>
        </Grid>
      </Grid>
    </PageContainer>,
    <PuzzlePage solution={Solutions[5]} />,
    <PageContainer lastPage>
      <Grid container direction="column" alignItems="center">
        <Grid item textAlign="center">
          <Box pt={30}>
            <h1>
              Will you <Green>marry</Green> me?
            </h1>
          </Box>
        </Grid>
      </Grid>
      <Grid item textAlign="center">
        [ring in wooden box]
      </Grid>
    </PageContainer>,
  ];

  const CurrentPage = () => pages[pageIndex];

  return (
    <div>
      <CurrentPage />
    </div>
  );
}

export default App;
