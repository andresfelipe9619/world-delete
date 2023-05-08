import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: "auto",
    color: "white",
    "& .MuiPaper-root": {
      backgroundColor: "#111",
      color: "#ffffff",
      boxShadow: "none",
    },

    "& .MuiButtonBase-root.MuiAccordionSummary-root": {
      borderBottom: "1px solid #464656",
      padding: 0,
      margin: "0 16px",
    }

  },
  heading: {
    flexBasis: "40%",
    fontSize: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(2),
    color: "#fff",
  },
  description: {
    flexBasis: "60%",
    fontSize: theme.typography.pxToRem(16),
    color: "#fff",
  },
  content: {
    color: '#fff'
  },
  expandIcon: {
    color: "#fff",
  },
}));

const CustomAccordion = ({ items }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {items.map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          >
            <Typography className={classes.heading}>{item.title}</Typography>
            <Typography className={classes.description}>
              {item.description}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <Typography>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default CustomAccordion;