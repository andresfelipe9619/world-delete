import React from "react";
import FormTriangle from "../home/FormTriangle";
import BannerText from "../google-Information/BannerText";
import { Typography } from "@mui/material";
import styles from "../google-Information/styles";

const bannerStyle = {
  title: "World Delete complies with European data protection regulations ",
  text_1: [
    "Specifically with the General Data Protection Regulation (GDPR), one of the EU’s ",
    "most important regulatory innovations of the last twenty years, which was approved",
    "on 14 April 2016 and has now been transposed into the law of each Member State.",
  ],
  text_2: [],
  class_1: "",
  class_2: "",
  class_3: "",
  class_4: "",
  class_5: "",
  class_6: "",
  box_primary: "",
  box_secondary: "",
  triangleVisible: false,
};

const Confidentially = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        background: "#060505",
      }}
    >
      <BannerText content={bannerStyle} url={"confidentially.png"}>
        <ol className={`ol_style_container`}>
          <li>
            <Typography
              className="_style_items_about_second"
              sx={styles.textNormal}
            >
              Specifically with the General Data Protection Regulation (GDPR),
              one of the EU’s
            </Typography>
          </li>
          <li>
            <Typography
              className="_style_items_about_second"
              sx={styles.textNormal}
            >
              most important regulatory innovations of the last twenty years,
              which was approved
            </Typography>
          </li>
          <li>
            <Typography
              className="_style_items_about_second"
              sx={styles.textNormal}
            >
              on 14 April 2016 and has now been transposed into the law of each
              Member State.
            </Typography>
          </li>
        </ol>
      </BannerText>
      <FormTriangle />
    </div>
  );
};

export default Confidentially;
