//import React
import React, { useEffect } from "react";
import BannerText from "../googleInformation/BannerText";
import styles from "../googleInformation/styles";
import { Grid, Typography } from "@mui/material";

const GoogleInformation = (props) => {
    
    return (
        <>
          <BannerText
                type={1}
                url="bannerGoogleInformation.png"
                content={props.json}>
            <ol className={`ol_style_container`}>
                <li>
                    <Typography sx={styles.textNormal}>
                      We erase any type of prejuducial information that could
                    </Typography>
                </li>
                <li>
                    <Typography sx={styles.textNormal}>
                      appear in the search engine and that affect your
                    </Typography>
                </li>
                <li>
                    <Typography sx={styles.textNormal}>
                      reputation. ¡100% guarantee!
                    </Typography>
                </li>
            </ol>
          </BannerText>
        </>
    )
}


export default GoogleInformation;