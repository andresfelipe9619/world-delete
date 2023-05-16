import React from "react";
import FormTriangle from "../home/FormTriangle";
import { Typography, Button, Grid } from "@mui/material";
import SearchSliderLink from "../google-Information/SearchSliderLink";
import styles from "../google-Information/styles";
import clsx from "clsx";

/**
 * @AUTHOR <cristian.machado@correounivalle.edu.co>
 * @description Page to join to teams
 *
 * @returns {React.Component}
 */
const FinancialCompliance = () => {
  return (
    <>
      <Grid
        item
        xs={12}
        container
        className={clsx("layout-content-padding", "background-compliance")}
      >
        <Grid item xs={12}>
          <Typography variant={"h1"}>
            Can you imagine how it would affect you if banks, <br /> governments
            and companies suspected you of <br /> being a negative part of
            society?
          </Typography>
          <ol className={clsx(`ol_style_container`)}>
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
        </Grid>
      </Grid>

      <SearchSliderLink />
      <FormTriangle />
    </>
  );
};

export default FinancialCompliance;
