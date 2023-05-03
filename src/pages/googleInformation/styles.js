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
};
export default styles;
