import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import mcafeeUrl from "../../assets/mcafee.png";
import nettitudeUrl from "../../assets/nettitude.png";

const titleStyle = { fontWeight: "bold", mb: 6 };

export default function Footer() {
  return (
    <Container maxWidth={false} sx={{ mt: 8 }} component={"footer"}>
      <Grid
        container
        spacing={2}
        justifyContent={"space-between"}
        className={"layout-content-padding-x"}
      >
        <Grid container item md={4} direction="column" spacing={2}>
          <Typography variant={"h2"} sx={titleStyle}>
            World Delete
          </Typography>
          <Typography sx={{ mb: 5 }}>
            The Division that focuses on the protection of the on-line
            reputation of natural and legal persons by deleting detrimental
            content from any platform on the Internet.
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box component="a" href="https://mui.com/" sx={{ height: 80 }}>
              <img src={mcafeeUrl} alt={"security logos"} />
            </Box>
            <Box
              component="a"
              href="https://twitter.com/MUI_hq"
              sx={{ height: 80, ml: 2 }}
            >
              <img src={nettitudeUrl} alt="Nettitude" />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          container
          direction={"column"}
          justifyContent={"center"}
        >
          <Typography variant={"h2"} align={"right"} sx={titleStyle}>
            Our Company
          </Typography>
          <Box display={"flex"} sx={{ mb: 5 }} justifyContent={"space-between"}>
            <span>About us</span>
            <span>Divisions</span>
            <span>Join the team</span>
          </Box>
          <Box display={"flex"} justifyContent={"space-between"}>
            <span>Cookies policy</span>
            <span>GDPR</span>
            <span>Legal notice</span>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
