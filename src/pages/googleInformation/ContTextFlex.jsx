import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";

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
          <Typography variant="h1">{titlePrimary}</Typography>
          <Grid
            item
            xs={12}
            sx={styled.containerSubDiv2}
            style={{ columns: content.text_secundary.length }}
          >
            {content.text_secundary.map((item, index) => {
              return (
                <Typography key={index} variant="body1">
                  {item}
                </Typography>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ContTextFlex;
