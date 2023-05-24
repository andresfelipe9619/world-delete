import React, { useEffect } from "react";
import FormTriangle from "../home/FormTriangle";
import { Grid, Typography } from "@mui/material";
import styles from "./styles";
import clsx from "clsx";

const images_content = require.context("../../assets/banners", true);

const BannerText = (props) => {
  const {
    title,
    dark = false,
    class_2,
    box_secondary,
    class_5,
    rightSide,
    class_6,
    triangleVisible,
  } = props.content;

  useEffect(() => {
    addClassHeader();
    return () => removeClassHeader();
  }, []);

  const imageUrl = images_content(`./${props.url}`);

  const bannerImageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: 724,
    overflow: "hidden",
  };

  const containerStyle = {
    pt: 30,
    ...(dark ? { backgroundColor: "rgba(0, 0, 0, 0.75)" } : null),
  };

  return (
    <>
      <Grid container sx={bannerImageStyle}>
        <Grid container item md={12} sx={containerStyle}>
          <Grid
            item
            container
            className={"layout-content-padding-x"}
            xs={12}
            flexDirection={"column"}
            md={rightSide ? 6 : 12}
          >
            <Typography
              component={"h2"}
              sx={styles.titleStyle}
              className={class_2}
            >
              {title}
            </Typography>
            {props.children}
          </Grid>

          {rightSide && (
            <Grid
              item
              container
              xs={12}
              md={6}
              className={clsx(box_secondary)}
              sx={{ px: 13 }}
            >
              <ol className={`ol_style_container item ${class_5}`}>
                {rightSide.map((item, index) => (
                  <li key={index}>
                    <Typography sx={styles.textNormal} className={class_6}>
                      {item}
                    </Typography>
                  </li>
                ))}
              </ol>
            </Grid>
          )}
        </Grid>
      </Grid>
      {triangleVisible && <FormTriangle />}
    </>
  );
};

function addClassHeader() {
  const header = document.querySelector("#header_component");
  header.classList.add("header__banner");
}

function removeClassHeader() {
  const header = document.querySelector("#header_component");
  header.classList.remove("header__banner");
}

export default BannerText;
