import React from "react";
import FormTriangle from "../home/FormTriangle";
import { Typography, Button } from "@mui/material";
import BannerText from "../google-Information/BannerText";
import SearchSliderLink from "../google-Information/SearchSliderLink";
import styles from "../google-Information/styles";

/**
 * @AUTHOR <cristian.machado@correounivalle.edu.co>
 * @description Page to join to teams
 *
 * @returns {React.Component}
 */
const FinancialCompliance = (props) => {
  return (
    <>
      <BannerText url={props.url} content={props.json.FinancialCompliance}>
        <ol className={`ol_style_container`}>
          <li>
            <Typography sx={styles.textNormal}>
              Currently there are three well-known and frequently-
            </Typography>
            <Typography sx={styles.textNormal}>
              used databases to which only the credit institutions,
            </Typography>
            <Typography sx={styles.textNormal}>
              corporations and private entities have access
            </Typography>
            <div
              style={{
                marginTop: "1em",
              }}
            >
              <Button variant={"contained"}>Contact us</Button>
              <Button sx={{ ml: 4 }}>Completely confidential call</Button>
            </div>
          </li>
        </ol>
      </BannerText>
      <SearchSliderLink />
      <FormTriangle />
    </>
  );
};

export default FinancialCompliance;