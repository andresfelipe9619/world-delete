//import React
import React, { useEffect } from "react";
import FormTriangle from "../home/FormTriangle";
import { Grid, Typography } from "@mui/material";
import styles from "./styles";

const images_content = require.context("../../assets/banners", true);

/**
 * @author: <cristian.machado@correounivalle.edu.co>
 * @returns {JSX.Element} BannerText
 */
const BannerText = (props) => {
  const {
    title,
    class_1,
    box_primary,
    class_2,
    box_secondary,
    class_5,
    text_2,
    class_6,
    triangleVisible,
    class_container__,
  } = props.content;

  useEffect(() => {
    addClassHeader();
    return () => removeClassHeader();
  }, []);

  return (
    <>
      <Grid container sx={styles.containerDiv} className={class_1}>
        <Grid item xs={12}>
          <img src={images_content(`./${props.url}`)} alt="banner" />
          <Grid className={class_container__} item xs={12}>
            <Grid item xs={12} className={box_primary}>
              <Typography
                dangerouslySetInnerHTML={{ __html: title }}
                sx={styles.titleStyle}
                className={class_2}
              />
              {props.children}
            </Grid>
            {text_2 && (
              <Grid className={`item_text_long ${box_secondary}`} item xs={12}>
                <ol className={`ol_style_container item ${class_5}`}>
                  {text_2.map((item, index) => {
                    return (
                      <li key={index}>
                        <Typography
                          dangerouslySetInnerHTML={{ __html: item }}
                          sx={styles.textNormal}
                          className={class_6}
                        />
                      </li>
                    );
                  })}
                </ol>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      {triangleVisible && <FormTriangle />}
    </>
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

export default BannerText;
