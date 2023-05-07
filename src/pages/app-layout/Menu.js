import React, { useCallback } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../router";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { CloseOutlined } from "@mui/icons-material";
import useResponsive from "../../hooks/useResponsive";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  // Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function MenuDrawer({ open = false, onClose }) {
  const navigate = useNavigate();
  const { isSmallScreen } = useResponsive();

  const handleClick = useCallback(
    (path) => () => {
      navigate(path);
      onClose();
    },
    [navigate, onClose]
  );

  const close = (
    <IconButton
      onClick={onClose}
      sx={{ height: 40, position: "absolute", top: 20, right: "2%" }}
    >
      <CloseOutlined />
    </IconButton>
  );

  const styles = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    pt: "20%",
    backgroundImage: `linear-gradient(to right, #060505, #170707)`,
  };

  let content = null;
  if (isSmallScreen) {
    content = (
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{ ...styles, justifyContent: "flex-start" }}
      >
        {Object.entries(Routes).map(([category, routes]) => (
          <Accordion
            elevation={0}
            disableGutters
            key={category}
            sx={{ width: "100%", backgroundColor: "transparent", border: 0 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon fontSize={"large"} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                paragraph
                variant="h3"
                sx={{ ml: 2, fontWeight: "bold" }}
              >
                {category}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {routes.map(({ label, path }) => (
                  <ListItem key={label} disablePadding>
                    <ListItemButton onClick={handleClick(path)}>
                      <ListItemText primary={label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
        {/*<Button*/}
        {/*  sx={{ width: 200, position: "absolute", bottom: 20 }}*/}
        {/*  variant={"contained"}*/}
        {/*>*/}
        {/*  Contact us*/}
        {/*</Button>*/}
      </Box>
    );
  } else {
    content = (
      <Box sx={{ ...styles, height: "100vh" }}>
        {Object.entries(Routes).map(([category, routes]) => (
          <Box width={"18vw"} key={category}>
            <Typography
              paragraph
              variant="h3"
              sx={{ ml: 2, fontWeight: "bold" }}
            >
              {category}
            </Typography>
            <List>
              {routes.map(({ label, path }) => (
                <ListItem key={label} disablePadding>
                  <ListItemButton onClick={handleClick(path)}>
                    <ListItemText primary={label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <Drawer anchor={"top"} open={open} onClose={onClose} full>
      <>
        {close}
        {content}
      </>
    </Drawer>
  );
}
