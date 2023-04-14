import * as React from "react";
import { Canvas } from "@react-three/fiber";
import Planet from "./planet";
import textureUrl from "../../assets/texture.jpg";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box"; // Reemplaza con la ruta a la textura del planeta
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const rotationSpeed = 0.001; // Ajusta la velocidad de rotación

export default function HomePage(props) {
  return (
    <Grid container>
      <Grid item md={4}>
        <Typography variant={"h1"}>
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
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Planet textureUrl={textureUrl} rotationSpeed={rotationSpeed} />
        </Canvas>
      </Grid>
    </Grid>
  );
}
