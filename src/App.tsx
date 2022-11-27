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
import Ring from "./assets/HoldingHandsRing.png";
import World from "./assets/World.png";
import Latte from "./assets/Latte.png";
import Arrows from "./pages/Arrows";
import Cloisters from "./assets/Cloisters.png";
import Yellow from "./pages/components/Yellow";
import Gray from "./pages/components/Gray";

function App() {
  const { pageIndex, setPageIndex } = useAppContext();

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
            <img
              src={WorkLaptop}
              alt="me coding and drawing at my desk with two cats"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              I wanted to illustrate our story together so far. This is a little
              digital flip book of memories that I have of us.
            </p>
          </Grid>
        </Grid>
      </PageContainer>
    </Arrows>,
    <Arrows>
      <PageContainer>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={6} textAlign="center">
            <img
              src={Subway}
              alt="sitting on the train and looking at one of our phones together"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              I remember when you first showed me wordles. Then for a long
              while, we kept up sharing them with each other every day.
              Sometimes we'd solve them on the <Yellow>t</Yellow>
              <Gray>r</Gray>
              <Yellow>a</Yellow>
              <Gray>in</Gray> together to pass the time or do them first thing
              in the morning.
            </p>
            <p>
              For the first puzzle, how did we <Gray>s</Gray>
              <Yellow>ta</Yellow>
              <Gray>rt</Gray>?
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
            <img
              src={Match}
              alt="looking at each others Hinge profiles and matching"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              In this city of over 18 million people, I find it remarkable how
              we found each other. After a long time spent isolated in my
              Seattle apartment, I decided to venture across the country for
              only a week. Not expecting anything, I went back on{" "}
              <Yellow>H</Yellow>
              <Gray>i</Gray>
              <Yellow>n</Yellow>
              <Gray>g</Gray>
              <Green>e</Green> to see who's out there. I am so happy I did.
            </p>
            <p>
              I fell for your kind eyes, adventurous spirit and ambitions. You
              have no idea how joyous I was that you took a chance on me and we
              were a <Green>match</Green>.
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
            <img
              src={Facetime}
              alt="talking to each other on our computers at home"
            />
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
              It didn’t take long for me to book another <Gray>pl</Gray>
              <Yellow>a</Yellow>
              <Gray>ne</Gray> ticket, becoming the first of many. Every visit
              was worth the six hour red eyes, but I am so glad we no longer
              have to do that anymore.
            </p>
          </Grid>
          <Grid item xs={12} md={5} textAlign="center">
            <Box maxWidth={450}>
              <img
                src={MapAndTickets}
                style={{ margin: "0px auto" }}
                alt="a map of the USA with boarding tickets"
              />
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
                <img src={Tacos} alt="date with Siobhan and tacos and drinks" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={7}>
            <p>
              On a autumn day in New York (that you loved to describe as
              "crisp"), we went on our first date together walking the bustling
              streets. You took me to your most favorite place for{" "}
              <Green>tacos</Green> in the upper west side. We joke now about how
              we were both too nervous, but eventually I worked up the courage
              to ask if I could hold your hand.
            </p>
          </Grid>

          <Grid item xs={12} md={5} textAlign="center">
            <Grid container direction="column">
              <Grid item>
                <img src={Cloisters} alt="the Met Cloisters" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={7}>
            <p>
              The next day, we ventured to another favorite of yours - the
              Cloisters. I loved walking around the beautiful garden and
              monastery with you, pointing out a <Gray>p</Gray>
              <Yellow>la</Yellow>
              <Gray>n</Gray>
              <Yellow>t</Yellow> and herb here and there, and seeing the unicorn
              tapestries.
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
                <img
                  src={Latte}
                  alt="walking together in the city holding lattes"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={7}>
            <p>
              We never go without grabbing a morning <Green>latte</Green> and a
              freshly baked pastry. It’s my favorite cozy, daily ritual with you
              (besides cuddling the cats). In the summer, we’d go to the park
              with <Gray>b</Gray>
              <Green>o</Green>
              <Gray>oks</Gray> we’ve collected along the way, enjoying each
              other’s company while being in our own little worlds.
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
            <img src={World} alt="map of the world with countries circled" />
          </Grid>
          <Grid item xs={12} md={6}>
            <p>
              Sometimes we are able to venture out of the city. We’ve climbed
              the snow-packed, evergreen mountains in the Pacific Northwest,
              hiked through the beautiful golden and red hills of the Northeast,
              and waded the chilly Atlantic shores.
            </p>
            <p>
              I can’t wait to travel the <Green>world</Green> with you and enjoy
              many lattes, trails, and books together.
            </p>
          </Grid>
        </Grid>
      </PageContainer>
    </Arrows>,
    <PuzzlePage solution={Solutions[5]} />,
    <Arrows>
      <PageContainer>
        <Grid container direction="column" alignItems="center">
          <Grid item textAlign="center">
            <Box pt={2} maxWidth={500}>
              <img src={Ring} alt="ring in a box" />
            </Box>
          </Grid>
        </Grid>
      </PageContainer>
    </Arrows>,
    <Arrows lastPage>
      <PageContainer lastPage>
        <Grid
          container
          direction="column"
          alignItems="center"
          // height="70vh"
          // justifyContent="center"
        >
          <Grid item textAlign="center">
            <p>
              Illustrated and coded by{" "}
              <a
                href="https://github.com/KathrynBrusewitz"
                style={{ color: "#80D540" }}
              >
                Kathryn Brusewitz
              </a>
            </p>
          </Grid>
          <Grid item>
            <button onClick={() => setPageIndex(0)}>Back to Beginning</button>
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
