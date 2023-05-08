import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const styles = {
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
    },
  },
  heading: {
    flexBasis: "40%",
    fontSize: (theme) => theme.typography.pxToRem(16),
    fontWeight: (theme) => theme.typography.fontWeightRegular,
    marginRight: (theme) => theme.spacing(2),
    color: "#fff",
  },
  description: {
    flexBasis: "60%",
    fontSize: (theme) => theme.typography.pxToRem(16),
    color: "#fff",
  },
  content: {
    color: "#fff",
  },
  expandIcon: {
    color: "#fff",
  },
};

const CustomAccordion = ({ items }) => {
  return (
    <Box sx={styles.root}>
      {items.map((item) => (
        <Accordion key={item.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={styles.expandIcon} />}
          >
            <Typography sx={styles.heading}>{item.title}</Typography>
            <Typography sx={styles.description}>{item.description}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={styles.details}>
            <Typography>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default CustomAccordion;
