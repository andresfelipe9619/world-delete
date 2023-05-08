//Importar React
import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import ContactForm from "../../components/form/ContactForm";

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
      className="background-triangle"
      sx={{ mr: 0, ml: -2, mt: -1, ...styleContainer }}
    >
      <Grid item md={8} container direction={"column"} sx={{ pl: 3, pt: 3 }}>
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
  const headerHeight = document.querySelector("#_height_header_");

  header.classList.add("header__google_information");
  headerHeight.classList.add("_height_header_");
}

function removeClassHeader() {
  const header = document.querySelector("#header_component");
  const headerHeight = document.querySelector("#_height_header_");

  header.classList.remove("header__google_information");
  headerHeight.classList.remove("_height_header_");
}

export default FormTriangle;
