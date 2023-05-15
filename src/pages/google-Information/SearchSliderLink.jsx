import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import styles from "./styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SearchIcon from "@mui/icons-material/Search";


  
const textArray = {
     "0": [
        "classification is created on the ",
        "basis of information from ",
        "different sources, mostly open ",
        "to the public such as press ",
        "articles, blogs and content from ",
        "judicial databases"
     ]   ,
     "1": [
        'investigation by Vice News,',
        'however, has revealed that',
        'Social Security or even',
        'passport numbers are',
        'sometimes included.'
     ],
     "2": [
        '“Investigated”, “accused”,',
        '“questioned”, “arrested” or',
        '“prosecuted” can be read on',
        'some people’s profiles in what',
        'can be only be described as a',
        'private criminal record available',
        'on the Internet by subscription.'
     ],
     "3": [
        'There are often links to posts',
        'on blogs in which the person concerned is accused of ',
        'terrorism without any real',
        'evidence since the blog’s',
        'veracity is more than',
        'questionable.'
     ]
}




/**
 * @AUTHOR <cristian.machado@correounivalle.edu.co>
 * @description Search - Slider - Link
 *
 * @returns {React.Component}
 */
const SearchSliderLink = () => {

  const [changeSearch, setChangeSearch] = React.useState('0')

  const handleMouseEnter = (e) => {
       
       if (changeSearch != e.currentTarget.getAttribute('item-mouseenter')) {
         setChangeSearch(e.currentTarget.getAttribute('item-mouseenter'))
       }
      
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={styles.gridContainerBox}>
          <Grid
            xs={12}
            sx={styles.gridSubContainerBox}
            style={{ backgroundColor: "var(--color-white-normal)" }}
            item
          >
            <Typography sx={styles.textComponentSearch}>
              {textArray[changeSearch].map((text, index) => {
                console.log(index);
                return (
                  <span key={index}>
                    {text}
                    <br />
                  </span>
                );
              })
              }
            </Typography>
            <Typography sx={styles.textNormalSearch}>
              Financial compliance
            </Typography>
            <Button
              variant={"outlined"}
              sx={{ width: 180, my: 4 }}
              endIcon={<KeyboardArrowRightIcon />}
              style={{ height: '3em' }}
            >
              View more
            </Button>
          </Grid>

          <Grid
            xs={12}
            item
            style={{
              display: "grid",
              placeItems: "center",
              backgroundColor: "var(--color_black)",
            }}
          >
            <Grid item xs={12} sx={styles.BoxNormalSearch}>
              <Typography 
                    sx={styles.textSeachIcon}
              >
                <SearchIcon />
                it
              </Typography>
              <Typography 
                        sx={styles.textSeachIcon}
                        className="hover_"
                        item-mouseenter="0"
                        onMouseEnter={handleMouseEnter}
              >
                <SearchIcon />
                it judicial
              </Typography>
              <Typography 
                        sx={styles.textSeachIcon}
                        className="hover_"
                        item-mouseenter="1"
                        onMouseEnter={handleMouseEnter}
              >
                <SearchIcon />
                it security
              </Typography>
              <Typography 
                        sx={styles.textSeachIcon}
                        item-mouseenter="2"
                        className="hover_"
                        onMouseEnter={handleMouseEnter}
              >
                <SearchIcon />
                it criminal
              </Typography>
              <Typography 
                        sx={styles.textSeachIcon}
                        className="hover_"    
                        item-mouseenter="3"  
                        onMouseEnter={handleMouseEnter}    
              >
                <SearchIcon />
                it evidence
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SearchSliderLink;
