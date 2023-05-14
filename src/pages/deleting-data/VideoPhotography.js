//import React
import React from "react";
import BannerText from "../google-Information/BannerText";
import styles from "../google-Information/styles";
import { Typography } from "@mui/material";

const VideoPhotography = (props) => {
  return (
    <>
      <BannerText url="videosPhotografias.png" content={props.json}>
        <ol className={`ol_style_container`}>
          <li>
            <Typography sx={styles.textNormal}>
              We are perfectly well aware of the damage an
            </Typography>
          </li>
          <li>
            <Typography sx={styles.textNormal}>
              undesirable video or photograph that goes
            </Typography>
          </li>
          <li>
            <Typography sx={styles.textNormal}>
              viral on the Internet can do.
            </Typography>
          </li>
        </ol>
      </BannerText>
    </>
  );
};

export default VideoPhotography;
