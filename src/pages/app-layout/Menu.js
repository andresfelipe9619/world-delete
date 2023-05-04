import React from "react";
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

export default function MenuDrawer({ open = false, onClose }) {
  const navigate = useNavigate();

  const handleClick = (path) => () => {
    navigate(path);
    onClose();
  };

  return (
    <Drawer anchor={"top"} open={open} onClose={onClose}>
      <>
        <IconButton
          onClick={onClose}
          sx={{ height: 40, position: "absolute", top: 20, right: 60 }}
        >
          <CloseOutlined />
        </IconButton>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            pt: "20%",
            backgroundImage: `linear-gradient(to right, #060505, #170707)`,
          }}
        >
          {Object.entries(Routes).map(([category, routes]) => (
            <Box width={"18vw"}>
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
      </>
    </Drawer>
  );
}
