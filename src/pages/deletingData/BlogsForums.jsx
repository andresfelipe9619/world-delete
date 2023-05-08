//import React
import React from "react";
import BannerText from "../googleInformation/BannerText";
import styles from "../googleInformation/styles";
import { Typography } from "@mui/material";

const BlogsForums = (props) => {
  return (
    <>
      <BannerText url="blogsForums.png" content={props.json}>
        <ol className={`ol_style_container`}>
          <li>
            <Typography sx={styles.textNormal}>
              Is a comment on a forum or blog causing trouble for you?
            </Typography>
          </li>
          <li>
            <Typography sx={styles.textNormal}>
              We can achieve 100% effective elimination of any publication on
              forums and blogs.
            </Typography>
          </li>
          <li>
            <Typography sx={styles.textNormal}>
              The offending content will disappear within a maximum of 24 hours.
            </Typography>
          </li>
        </ol>
      </BannerText>
    </>
  );
};

export default BlogsForums;
