//import React
import React from "react";
import BannerText from "../google-Information/BannerText";
import FormTriangle from "../home/FormTriangle";
import ContTextFlex from "../google-Information/ContTextFlex";
import { Typography, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "../google-Information/styles";

export default function AboutUs(props) {
  console.log(props);
  return (
    <>
      <BannerText
        type={1}
        url="about_1.png"
        content={props.json["about_first"]}
      />
      <ContTextFlex
        content={props.json["content_text_about"]}
        backgroundColor={"var(--color-black-semit-lite)"}
      />
      <BannerText
        type={1}
        url="about_2.png"
        content={props.json["about_second"]}
      >
        <ol className={`ol_style_container`}>
          <li>
            <Typography
              className="_style_items_about_second"
              sx={styles.textNormal}
            >
              World Delete has increased its customer portfolio by more than
            </Typography>
            <Typography
              className="_style_items_about_second"
              sx={styles.textNormal}
            >
              200% per annum in recent years due to the ease with which users
            </Typography>
            <Typography
              className="_style_items_about_second"
              sx={styles.textNormal}
            >
              can publish anonymous, unfavourable comments on the Internet.
            </Typography>
            <Button
              variant={"outlined"}
              sx={{ width: 180, my: 4 }}
              endIcon={<KeyboardArrowRightIcon />}
            >
              View more
            </Button>
          </li>
        </ol>
      </BannerText>
      <ContTextFlex
        content={props.json["content_text_out_services"]}
        backgroundColor={"var(--color-black-background)"}
      />
      <FormTriangle />
    </>
  );
}
