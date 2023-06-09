import * as React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import FormTriangle from "./FormTriangle.js";
import useResponsive from "../../hooks/useResponsive";
// import Carousel from "../../components/carousel/Carousel";
import barsUrl from "../../assets/bars.png";
import dashboardUrl from "../../assets/dashboard.png";
import clsx from "clsx";

export default function HomePage() {
  const { isSmallScreen } = useResponsive();
  return (
    <Grid container sx={{ mt: -4, mb: 4, py: 0 }}>
      <Grid
        item
        md={12}
        className={clsx("background-world", "layout-content-padding-x")}
      >
        <Box sx={{ width: "30%", pt: 10 }}>
          <Typography variant={"h1"} sx={{ mt: 10 }}>
            <strong>We delete</strong> information
            <br /> <strong>detrimental</strong>
            to <strong>your reputation</strong> on the
            <br /> Internet
          </Typography>
        </Box>
        <Box sx={{ width: "35%" }}>
          <Typography sx={{ my: 6 }}>
            The Division that focuses on the protection of
            <br />
            the online reputation of natural and legal persons.
          </Typography>
        </Box>
        <Box my={8}>
          <Button variant={"contained"}>Contact us</Button>
          <Button sx={{ ml: 4 }}>Completely confidential call</Button>
        </Box>
        <Typography paragraph>
          Start now with us and get solution of your request!
        </Typography>
        <Box display={"flex"} alignContent={"center"}>
          <PlayCircleOutlineIcon fontSize={"small"} sx={{ mb: 4, mr: 2 }} />
          <Typography paragraph>See how it works</Typography>
        </Box>
      </Grid>
      {!isSmallScreen && (
        <Box
          sx={{
            position: "absolute",
            right: (theme) => theme.spacing(10),
            top: 200,
          }}
        >
          <CustomBox value={120} label={"happy clients"} />
          <CustomBox value={9} label={"years of experience"} />
          <CustomBox value={"1K TB"} label={"of deleted info"} />
        </Box>
      )}
      {/*<Grid item md={12}>*/}
      {/*  <Carousel />*/}
      {/*</Grid>*/}
      <Grid
        item
        container
        md={12}
        sx={{ bgcolor: "#DDDDEA", color: "#1A1A1C" }}
      >
        <Grid item xs={12}>
          <img src={dashboardUrl} alt={"dashboard"} width={"100%"} />
        </Grid>
        <Grid item container xs={12} className={"layout-content-padding"}>
          <Grid item xs={4}>
            <Typography color={"inherit"} variant={"h1"} component={"h2"}>
              Mandatory non-disclosure agreement
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography color={"inherit"}>
              World Delete enters into a mandatory non-disclosure agreement with
              all its potential customers.
            </Typography>
          </Grid>
          <Grid item xs={4} container align justifyContent={"flex-end"}>
            <ViewMoreButton />
          </Grid>
        </Grid>
      </Grid>

      <Grid item container xs={12} sx={{ position: "relative" }}>
        <img src={barsUrl} alt={"bars"} />
        <Grid
          item
          md={12}
          container
          className={"layout-content-padding"}
          sx={{ position: "absolute", top: (theme) => theme.spacing(2) }}
        >
          <Grid item xs={5}>
            <Typography variant={"h1"} component={"h2"}>
              World Delete is provided with
              <br /> more than 10 years of experience
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>
              World Delete is a technological division of World
              <br /> Intelligence that specialises in deleting content
              <br /> on the Internet that may affect the reputation
              <br /> and credibility of companies, institutions and
              <br /> individuals.
            </Typography>
          </Grid>
          <Grid item xs={3} container justifyContent={"flex-end"}>
            <ViewMoreButton />
          </Grid>
        </Grid>
      </Grid>
      <FormTriangle />
    </Grid>
  );
}

function ViewMoreButton() {
  return (
    <Button
      variant={"outlined"}
      sx={{ mx: 4, height: 40 }}
      endIcon={<KeyboardArrowRightIcon />}
    >
      View more
    </Button>
  );
}

function CustomBox({ value, label }) {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography
        variant={"h1"}
        component={"h2"}
        sx={{ mt: 3, mb: 2, fontWeight: "bold" }}
      >
        {value}+
      </Typography>
      <Typography variant={"body"} sx={{ mb: 7 }}>
        {label}
      </Typography>
    </Box>
  );
}
