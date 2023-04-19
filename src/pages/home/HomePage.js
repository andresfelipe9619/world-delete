import * as React from "react";
import { Canvas } from "@react-three/fiber";
import Planet from "./Planet";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box"; // Reemplaza con la ruta a la textura del planeta
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import textureUrl from "../../assets/texture.jpg";
import barsUrl from "../../assets/bars.png";
import dashboardUrl from "../../assets/dashboard.png";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Carousel from "../../components/carousel/Carousel";
import FormTriangle from "./FormTriangle.js";
const rotationSpeed = 0.001; // Ajusta la velocidad de rotación


export default function HomePage(props) {
  return (
    <Grid container sx={{ p: 3 }}>
      <Grid item md={4}>
        <Typography variant={"h1"} sx={{ mt: 10 }}>
          <strong>We delete</strong> information <strong>detrimental</strong> to{" "}
          <strong>your reputation</strong> on the Internet
        </Typography>
        <Typography sx={{ my: 6 }}>
          The Division that focuses on the protection of the online reputation
          of natural and legal persons.
        </Typography>
        <Box my={8}>
          <Button variant={"contained"}>Contact us</Button>
          <Button sx={{ ml: 4 }}>Completely confidential call</Button>
        </Box>
        <Typography paragraph>
          Start now with us and get solution of your request!
        </Typography>
        <Box display={"flex"} alignContent={"center"}>
          <PlayCircleOutlineIcon fontSize={"small"} sx={{ mr: 2 }} />
          <Typography paragraph>See how it works</Typography>
        </Box>
      </Grid>
      <Grid item md={8}>
        <Box style={{ width: "100%", height: 600, pr: 10 }}>
          <Canvas style={{ position: "relative" }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Planet textureUrl={textureUrl} rotationSpeed={rotationSpeed} />
          </Canvas>
        </Box>

        <Box sx={{ position: "absolute", right: 40, top: 200 }}>
          <CustomBox value={120} label={"happy clients"} />
          <CustomBox value={9} label={"years of experience"} />
          <CustomBox value={"1K TB"} label={"of deleted info"} />
        </Box>
      </Grid>
      {/*<Grid item md={12}>*/}
      {/*  <Carousel />*/}
      {/*</Grid>*/}
      <Grid
        item
        container
        spacing={4}
        md={12}
        sx={{ bgcolor: "#DDDDEA", color: "#1A1A1C", pb: 6 }}
      >
        <Grid item xs={12} sx={{ pr: 4 }}>
          <img src={dashboardUrl} alt={"dashboard"} width={"100%"} />
        </Grid>
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
        <Grid item xs={4} container justifyContent={"flex-end"}>
          <ViewMoreButton />
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ position: "relative", mr: -4, ml: -2 }}>
        <img src={barsUrl} alt={"bars"} />
        <Grid
          item
          md={12}
          container
          sx={{ pl: 4, position: "absolute", top: 100 }}
        >
          <Grid item xs={5}>
            <Typography variant={"h1"} component={"h2"}>
              World Delete is provided with more than 10 years of experience
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>
              World Delete is a technological division of World Intelligence
              that specialises in deleting content on the Internet that may
              affect the reputation and credibility of companies, institutions
              and individuals.
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
      sx={{ m: 4 }}
      endIcon={<KeyboardArrowRightIcon />}
    >
      View more
    </Button>
  );
}
function CustomBox({ value, label }) {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography variant={"h2"} sx={{ mt: 3, mb: 1, fontWeight: "bold" }}>
        {value}+
      </Typography>
      <Typography variant={"h4"} sx={{ mb: 1 }}>
        {label}
      </Typography>
    </Box>
  );
}
