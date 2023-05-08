//import React
import React from "react";
import BannerText from "../googleInformation/BannerText";
import styles from "../googleInformation/styles";
import { Typography } from "@mui/material";

const DigitalMedia = (props) => {
  return (
    <>
      <BannerText url="digitalMedia.png" content={props.json}>
        <ol className={`ol_style_container`}>
          <li>
            <Typography sx={styles.textNormal}>
              Has your name or brand been published in one or more
            </Typography>
          </li>
          <li>
            <Typography sx={styles.textNormal}>
              digital media and you want to erase all traces?
            </Typography>
          </li>
        </ol>
      </BannerText>
    </>
  );
};

export default DigitalMedia;
