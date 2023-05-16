import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  VideocamOutlined as VideocamIcon,
} from "@mui/icons-material";

const styles = {
  root: {
    width: "100%",
    color: "white",
    "& .MuiPaper-root": {
      background: "none",
      color: "#ffffff",
      boxShadow: "none",
    },
    ".MuiPaper-root.MuiAccordion-root.MuiAccordion-rounded.MuiAccordion-gutters":
      {
        "&::before": {
          display: "none",
        },
      },

    "& .MuiButtonBase-root.MuiAccordionSummary-root": {
      borderBottom: "1px solid #464656",
      padding: 0,
      margin: "0 16px",
    },

    ".container-camera": {
      position: "relative",
      width: "30px",
    },
  },
  cameraIcon: {
    position: "absolute",
    top: 0,
    left: "-20px",
    fontSize: "1.5rem",
    color: "#fff",
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
            <div className="container-camera">
              {item.showIcon && <VideocamIcon sx={styles.cameraIcon} />}
            </div>
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
