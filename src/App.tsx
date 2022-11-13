import React, { useEffect } from "react";
import { useAppContext } from "./context/AppContext";
import TitlePage from "./pages/TitlePage";
import PageContainer from "./pages/PageContainer";
import { Box, Grid } from "@mui/material";
import Green from "./pages/components/Green";
import PuzzlePage from "./pages/PuzzlePage";
import { saveCurrentPage, Solutions } from "./context/GameStateStorage";
import WorkLaptop from "./assets/WorkingAtDesk---Animated.gif";
import Subway from "./assets/Subway---Animated.gif";
import Match from "./assets/Match.png";
import Facetime from "./assets/Facetime.png";
import MapAndTickets from "./assets/MapAndTickets.png";
import Tacos from "./assets/Tacos.png";
import Ring from "./assets/Ring.png";
import World from "./assets/World.png";
import Latte from "./assets/Latte.png";
import Arrows from "./pages/Arrows";

function App() {
  const { pageIndex } = useAppContext();

  useEffect(() => {
    saveCurrentPage(pageIndex);
  }, [pageIndex]);

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
  }, [pageIndex]);

  const pages: Array<JSX.Element> = [
    <Arrows firstPage>
      <PageContainer firstPage>
        <TitlePage />
      </PageContainer>
    </Arrows>,
    <Arrows>
      <PageContainer>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={6} textAlign="center">
            <img src={WorkLaptop} />
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              I had this idea of illustrating our story together so far. It’s a
              little flipbook of memories that I have of us.
            </p>
          </Grid>
        </Grid>
      </PageContainer>
    </Arrows>,
    <Arrows>
      <PageContainer>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={6} textAlign="center">
            <img src={Subway} />
          </Grid>
          <Grid item xs={12} md={6}>
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
      </PageContainer>
    </Arrows>,
    <PuzzlePage solution={Solutions[0]} />,
    <Arrows>
      <PageContainer>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={6} textAlign="center">
            <img src={Match} />
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              In this city of over 18 million people, I find it remarkable how
              we found each other. After a long time spent isolated in my
              Seattle apartment, I decided to venture across the country for
              just a week. Not expecting anything, I opened the app. I am so
              glad I did.
            </p>
            <p>
              I fell for the kindness in your eyes, the honesty in your answers,
              and the bravery of your ambitions. You have no idea how joyous I
              was that you took a chance on me and we were a{" "}
              <Green>match</Green>.
            </p>
          </Grid>
        </Grid>
      </PageContainer>
    </Arrows>,
    <PuzzlePage solution={Solutions[1]} />,
    <Arrows>
      <PageContainer>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={6} textAlign="center">
            <img src={Facetime} />
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              Our very first date actually happened 2400 miles apart. Six hours
              here, eight hours there. Not a day passed where we didn’t talk
              about anything and everything over the <Green>phone</Green>.
            </p>
          </Grid>
          <Grid item xs={12} md={7} textAlign="right">
            <p>
              It didn’t take long for me to book another ticket, becoming the
              first of many. Every visit was worth the six hour red eyes, but I
              am so glad we no longer have to do that anymore.
            </p>
          </Grid>
          <Grid item xs={12} md={5} textAlign="center">
            <Box maxWidth={450}>
              <img src={MapAndTickets} style={{ margin: "0px auto" }} />
            </Box>
          </Grid>
        </Grid>
      </PageContainer>
    </Arrows>,
    <PuzzlePage solution={Solutions[2]} />,
    <Arrows>
      <PageContainer>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={5} textAlign="center">
            <Grid container direction="column">
              <Grid item>
                <img src={Tacos} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={7}>
            <p>
              On a crisp, autumn day in New York, we went on our first date
              together walking the bustling streets. You took me to your most
              favorite place for <Green>tacos</Green> in the upper west side. We
              were both so nervous, but eventually I worked up the courage to
              ask if I could hold your hand.
            </p>
          </Grid>
        </Grid>
      </PageContainer>
    </Arrows>,

    <PuzzlePage solution={Solutions[3]} />,
    <Arrows>
      <PageContainer>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={5} textAlign="center">
            <Grid container direction="column">
              <Grid item>
                <img src={Latte} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={7}>
            <p>
              We never go without grabbing a morning <Green>latte</Green> and a
              freshly baked pastry together. It’s my favorite cozy, daily ritual
              with you. Sometimes we’d go to the park with books we’ve collected
              along the way, enjoying each other’s company while being in our
              own little worlds.
            </p>
          </Grid>
        </Grid>
      </PageContainer>
    </Arrows>,

    <PuzzlePage solution={Solutions[4]} />,
    <Arrows>
      <PageContainer>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={6} textAlign="center">
            <img src={World} />
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              Sometimes we are able to venture out of the city. We’ve climbed
              the snow-packed, evergreen mountains in the Pacific Northwest,
              hiked through the beautiful golden and red hills of the Northeast,
              and waded the cold shores of the Atlantic.
            </p>
            <p>
              I can’t wait to travel the <Green>world</Green> with you and enjoy
              many more lattes, books, and trails together.
            </p>
          </Grid>
        </Grid>
      </PageContainer>
    </Arrows>,
    <PuzzlePage solution={Solutions[5]} />,
    <Arrows lastPage>
      <PageContainer lastPage>
        <Grid container direction="column" alignItems="center">
          <Grid item textAlign="center">
            <Box pt={10} maxWidth={800}>
              <img src={Ring} />
            </Box>
          </Grid>
        </Grid>
      </PageContainer>
    </Arrows>,
  ];

  const CurrentPage = () => pages[pageIndex];

  return (
    <div>
      <CurrentPage />
    </div>
  );
}

export default App;
