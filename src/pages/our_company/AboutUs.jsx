//import React
import React from "react";
import BannerText from "../googleInformation/BannerText";
import FormTriangle from "../home/FormTriangle";
import ContTextFlex from "../googleInformation/ContTextFlex";

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
      />
      <ContTextFlex
        content={props.json["content_text_out_services"]}
        backgroundColor={"var(--color-black-background)"}
      />
      <FormTriangle />
    </>
  );
}
