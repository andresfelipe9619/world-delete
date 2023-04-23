//Importar React
import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import ContactForm from "../../components/form/ContactForm";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function FormTriangle() {
  return (
    <Grid
      item
      md={12}
      container
      className="background-triangle"
      sx={{ mr: 0, ml: -2, mt: -1 }}
    >
      <Grid item md={8} container direction={"column"} sx={{ pl: 3, pt: 3 }}>
        <Typography variant={"h1"} component={"h2"} sx={{ maxWidth: "40%" }}>
          Deleting detrimental content de from any platform on the Internet
        </Typography>
        <Typography sx={{ my: 4 }}>+ 1 (918) 309 2025</Typography>
        <Typography>info@world-delete.com</Typography>
        <Button
          variant={"outlined"}
          sx={{ width: 180, my: 4 }}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Contact us
        </Button>
      </Grid>
      <Grid item md={4} sx={{ pr: 2 }}>
        <ContactForm />
      </Grid>
    </Grid>
  );
}
