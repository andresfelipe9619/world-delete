import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { Children } from "react";

const styled = {
  containerDiv: {
    minHeight: "15em",
    width: "100%",
  },
  containerSubDiv: {
    display: "flex",
    "& > h1": {
      display: "grid",
      placeItems: "center",
      height: "100%",
      width: "35%",
      fontStyle: "normal",
      fontWeight: 800,
      fontSize: "36px",
      lineHeight: "57px",
      color: "var(--color-gray-light)",
      "@media (max-width: 600px)": {
        width: "100%",
        display: "grid",
        gap: "0.5em",
      },
    },
  },
  containerSubDiv2: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "65%",
    overflow: "hidden",
    "& > p": {
      alignSelf: "center",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      color: "var(--color-gray-light)",
      lineHeight: "176%;",
      "& > span": {
        width: "100%",
        textAlign: "center",
      },
    },
    "@media (max-width: 600px)": {
      width: "100%",
      flexDirection: "column",
    },
  },
};

const ContTextFlex = ({ content, backgroundColor }) => {
  const [titlePrimary, setTitlePrimary] = useState(content.title_primary);

  useEffect(() => {
    setTitlePrimary(content.title_primary);
  }, [content.title_primary]);

  return (
    <>
      <Grid
        container
        sx={styled.containerDiv}
        style={{ background: backgroundColor }}
      >
        <Grid item xs={12} sx={styled.containerSubDiv}>
          <Typography
            dangerouslySetInnerHTML={{ __html: titlePrimary }}
            variant="h1"
          />
          <Grid
            item
            xs={12}
            sx={styled.containerSubDiv2}
            style={{ columns: content.text_secondary.length }}
          >
            {Children.map(content.text_secondary, (item, index) => {
              return (
                <Typography
                  dangerouslySetInnerHTML={{ __html: item }}
                  key={index}
                  variant="body1"
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ContTextFlex;
