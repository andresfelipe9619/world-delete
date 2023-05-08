import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import styles from "./styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SearchIcon from "@mui/icons-material/Search";

/**
 * @AUTHOR <cristian.machado@correounivalle.edu.co>
 * @description Search - Slider - Link
 *
 * @returns {React.Component}
 */
const SearchSliderLink = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={styles.gridContainerBox}>
          <Grid
            xs={12}
            sx={styles.gridSubContainerBox}
            style={{ backgroundColor: "var(--color-white-normal)" }}
          >
            <Typography sx={styles.textComponentSearch}>
              classification is created on the <br />
              basis of information from <br />
              different sources, mostly open <br />
              to the public such as press <br />
              articles, blogs and content from <br />
              judicial databases
            </Typography>
            <Typography sx={styles.textNormalSearch}>
              Financial compliance
            </Typography>
            <Button
              variant={"outlined"}
              sx={{ width: 180, my: 4 }}
              endIcon={<KeyboardArrowRightIcon />}
            >
              View more
            </Button>
          </Grid>

          <Grid
            xs={12}
            style={{
              display: "grid",
              placeItems: "center",
              backgroundColor: "var(--color_black)",
            }}
          >
            <Grid xs={12} sx={styles.BoxNormalSearch}>
              <Typography sx={styles.textSeachIcon}>
                <SearchIcon />
                it
              </Typography>
              <Typography sx={styles.textSeachIcon}>
                <SearchIcon />
                it judicial
              </Typography>
              <Typography sx={styles.textSeachIcon}>
                <SearchIcon />
                it judicial
              </Typography>
              <Typography sx={styles.textSeachIcon}>
                <SearchIcon />
                it judicial
              </Typography>
              <Typography sx={styles.textSeachIcon}>
                <SearchIcon />
                it judicial
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchSliderLink;
