//Importar React
import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import ContactForm from "../../components/form/ContactForm";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

export default function FormTriangle({ showText = true, title }) {
  const navigate = useNavigate();
  return (
    <Grid
      item
      md={12}
      container
      className={clsx("layout-content-padding", "background-triangle")}
    >
      <Grid item md={8} container direction={"column"} sx={{ pt: 3 }}>
        <Typography variant={"h1"} component={"h2"} sx={{ maxWidth: "40%" }}>
          {title ||
            "Deleting detrimental content de from any platform on the Internet"}
        </Typography>
        {showText && (
          <>
            <Typography sx={{ my: 4 }}>+ 1 (918) 309 2025</Typography>
            <Typography>info@world-delete.com</Typography>
            <Button
              variant={"outlined"}
              sx={{ width: 140, my: 4 }}
              onClick={() => navigate("/contact-us")}
              endIcon={<KeyboardArrowRightIcon fontSize={"large"} />}
            >
              Contact us
            </Button>
          </>
        )}
      </Grid>
      <Grid item md={4}>
        <ContactForm />
      </Grid>
    </Grid>
  );
}
