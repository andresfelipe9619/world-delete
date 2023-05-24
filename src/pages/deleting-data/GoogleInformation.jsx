//import React
import React from "react";
import BannerText from "../google-Information/BannerText";
import styles from "../google-Information/styles";
import { Typography } from "@mui/material";

const GoogleInformation = (props) => {
  return (
    <>
      <BannerText type={1} url="googleInformation.png" content={props.json}>
        <Typography component="div" sx={styles.textNormal}>
          We erase any type of prejudicial information that could
          <br />
          appear in the search engine and that affect your
          <br />
          reputation. ¡100% guarantee!
        </Typography>
      </BannerText>
    </>
  );
};

export default GoogleInformation;
