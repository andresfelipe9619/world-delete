const styles = {
  containerDiv: {
    minHeight: "35vh",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "auto",
      objectFit: "cover",
    },
    "& > div": {
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 1)",
        opacity: 0.5,
      },
      "& > div": {
        display: "grid",
        justifyItems: "center",
        gridAutoRows: "auto",
        gridTemplateColumns: "repeat(auto-fit, minmax( min(98%, 30em), 1fr))",
        gridGap: "2%",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hiddent",
        "& > div": {
          marginTop: "35%",
        },
        "& > div.item_text_long": {
          width: "70%",
        },
      },
    },
    "@media (max-width: 768px)": {
      minHeight: "75vh",
      "& img": {
        height: "-webkit-fill-available",
      },
      "& > div": {
        "& > div": {
          justifyItems: "start",
          marginLeft: "3%",

          "& > div.item_text_long": {
            display: "none",
          },
          "& > div:not(.item_text_long)": {
            width: "60%",
          },
        },
      },
    },
  },
  titleStyle: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "24px",
    color: "var( --color-gray-light)",
    "@media (max-width: 768px)": {
      color: "var(--color-white-normal)",
      fontWeight: "400",
    },
  },
  textNormal: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    color: "var(--color-gray)",
    "@media (max-width: 768px)": {
      color: "var(--color-white-normal)",
      fontWeight: "400",
    },
  },
  olConatainer: {
    paddingInlineStart: "0px",
  },
  gridContainerBox: {
    display: "grid",
    gridTemplateColumns: "60% 40%",
    "& > div": {
      minHeight: "35em",
    },
  },
  gridSubContainerBox: {
    display: "grid",
    gridTemplateColumns: "100%",
    gridTemplateRows: "72% 8% 18%",
    gap: "2%",
    padding: "4em",
  },
  textComponentSearch: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "36px",
    lineHeight: "51px",
    color: "var(--color-title-blue)",
    overflow: "hidden",
    WebkitLineClamp: 'last',
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap', 
     display: "-webkit-box",
  },
  textNormalSearch: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    color: "var(--color_black)",
  },
  BoxNormalSearch: {
    display: "grid",
    gap: "0.7em",
    gridTemplateColumns: "100%",
    gridTemplateRows: "auto",
    boxShadow: "0px 0px 25px #060606",
    borderRadius: "25px",
    backgroundColor: "var(--color-gray-medium)",
    width: "90%",
    padding: "1.4em",
    overflow: "hidden",
  },
  textSeachIcon: {
    display: "flex",
    alignItems: "center",
    gap: "2em",
    color: "var(--color-white-normal)",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    "&:first-of-type": {
      borderBottom: "1px solid #606368",
      paddingBottom: "0.5em",
      "& > svg": {
        fill: "var(--color-white-normal)",
      },
    },
    "& > svg": {
      fill: "#7F8088",
    },
  },
  gridContainerDeleteErase: {
    display: "grid",
    width: "100%",
    height: "auto",
    minHeight: "32em",
    backgroundColor: "var(--color_black)",
    padding: "4em",
  },
  titlePageErase: {
    fontStyle: "normal",
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '36px',
    color: 'var(--color-white-normal)',
  },
  textTableErase: {
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineheight: '176%',
    color: 'var(--color-white-normal)',
  },
  containerTableErase: {
      '& > div': {
        borderTop: '2px solid var(--color-black-4656)',
        '&:last-of-type': {
          borderBottom: '2px solid var(--color-black-4656)',
        }
      }
  },
  containerTitleErase: {
      marginTop: '2em',
      marginBottom: '2em',
  }
};
export default styles;
