//Importar React
import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import ContactForm from "../../components/form/ContactForm";
import clsx from "clsx";

const FormTriangle = (props) => {
  const { children, styleContainer, styleHeader } = props;

  useEffect(() => {
    styleHeader && addClassHeader();
    return () => removeClassHeader();
  }, [styleHeader]);

  return (
    <Grid
      item
      md={12}
      container
      className={clsx("layout-content-padding", "background-triangle")}
      sx={{ mr: 0, ml: -2, mt: -1, ...styleContainer }}
    >
      <Grid item md={8} container direction={"column"} sx={{ pt: 3 }}>
        {children}
      </Grid>
      <Grid item md={4} sx={{ pr: 2 }}>
        <ContactForm />
      </Grid>
    </Grid>
  );
};

function addClassHeader() {
  const header = document.querySelector("#header_component");

  header.classList.add("header__google_information");
}

function removeClassHeader() {
  const header = document.querySelector("#header_component");

  header.classList.remove("header__google_information");
}

export default FormTriangle;
