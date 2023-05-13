//import React
import React from "react";
import BannerText from "../googleInformation/BannerText";
import styles from "../googleInformation/styles";
import { Typography } from "@mui/material";

const MentionsComments = (props) => {
  return (
    <>
      <BannerText url="mentionsComments.png" content={props.json}>
        <ol className={`ol_style_container`}>
          <li>
            <Typography sx={styles.textNormal}>
              More than 80% of all Internet searches are carried
            </Typography>
          </li>
          <li>
            <Typography sx={styles.textNormal}>
              out on Google and in addition, 8 out of 10 users
            </Typography>
          </li>
          <li>
            <Typography sx={styles.textNormal}>
              check the reviews before consulting the search
            </Typography>
          </li>
          <li>
            <Typography sx={styles.textNormal}>
              engine's own results.
            </Typography>
          </li>
        </ol>
      </BannerText>
    </>
  );
};

export default MentionsComments;
