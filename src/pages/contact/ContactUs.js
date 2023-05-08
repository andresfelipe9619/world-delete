import React from "react";
import FormTriangle from "../home/FormTriangle";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import leftMap from "../../assets/contactus/left-map.png";
import rightMap from "../../assets/contactus/right-map.png";
const ContactUs = () => {
  return (
    <Grid container sx={{ py: 3 }} spacing={2}>
      <Grid item xs={12} container spacing={2}>
        <Grid item xs={3}>
          <Typography variant={"h1"} component={"h2"}>
            Where we are?
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography align={"right"} variant={"h3"}>
            Miami
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img alt={"left-map"} src={leftMap} height={"80%"} width={"100%"} />
      </Grid>
      <Grid item xs={12} sm={6} container sx={{ my: 8 }}>
        <Grid item sm={4} container justifyContent={"center"}>
          <Typography variant={"h1"} component={"h2"}>
            Lets talk
          </Typography>
        </Grid>
        <Grid
          item
          sm={8}
          container
          direction={"column"}
          alignContent={"center"}
        >
          <Typography paragraph>+1 (918) 309-2025</Typography>
          <Typography paragraph>info@world-delete.com</Typography>
          <Typography paragraph>
            4300 Biscayne Blvd, Miami, FL 33137, EE.UU
          </Typography>
        </Grid>
        <img alt={"left-map"} src={rightMap} />
      </Grid>
      <FormTriangle showText={false} title={"Join the team"} />
    </Grid>
  );
};

export default ContactUs;
