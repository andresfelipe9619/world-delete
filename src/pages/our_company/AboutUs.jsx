//import React
import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import BannerText from "../googleInformation/BannerText";
import FormTriangle from '../home/FormTriangle';
import ContTextFlex from "../googleInformation/ContTextFlex";

export default function AboutUs(props) {
    console.log(props);
    return (
        <>
           <BannerText type={1} 
                       url="about_1.png"
                       content={props.json['about_first']}  />
           <ContTextFlex />
           <BannerText type={1} 
                       url="about_2.png"
                       content={props.json['about_second']}  />
            <ContTextFlex />
            <FormTriangle />
        </>
    )

}