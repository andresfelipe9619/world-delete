import React from "react";
import FormTriangle from "../home/FormTriangle";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import leftMap from "../../assets/contactus/left-map.png";
import rightMap from "../../assets/contactus/right-map.png";
const ContactUs = () => {
  return (
    <Grid container sx={{ py: 3 }} spacing={4}>
      <Grid item xs={12} container>
        <Typography variant={"h2"}>Who we are?</Typography>
        <Typography>Miami</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img alt={"left-map"} src={leftMap} />
      </Grid>
      <Grid item xs={12} sm={6} container sx={{ pt: 4 }}>
        <Grid item sm={6}>
          <Typography variant={"h2"}>Lets talk</Typography>
        </Grid>
        <Grid item sm={6} container direction={"column"}>
          <Typography>+1 (918) 309-2025</Typography>
          <Typography>info@world-delete.com</Typography>
          <Typography>4300 Biscayne Blvd, Miami, FL 33137, EE.UU</Typography>
        </Grid>
        <img alt={"left-map"} src={rightMap} />
      </Grid>
      <FormTriangle showText={false} title={"Join the team"} />
    </Grid>
  );
};

export default ContactUs;
