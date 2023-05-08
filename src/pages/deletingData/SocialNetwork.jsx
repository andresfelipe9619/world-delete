//import React
import React from "react";
import BannerText from "../googleInformation/BannerText";
import styles from "../googleInformation/styles";
import { Typography } from "@mui/material";

const SocialNetwork = (props) => {
  return (
    <>
      <BannerText url="socialNetwork.png" content={props.json}>
        <ol className={`ol_style_container`}>
          <li>
            <Typography sx={styles.textNormal}>
              Would you like to erase your given name and surname from
            </Typography>
          </li>
          <li>
            <Typography sx={styles.textNormal}>
              all social networks (Facebook, Twitter, Instagram, Vk,
            </Typography>
          </li>
          <li>
            <Typography sx={styles.textNormal}>
              Pinterest and others)?
            </Typography>
          </li>
        </ol>
      </BannerText>
    </>
  );
};

export default SocialNetwork;
