import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TranslateIcon from "@mui/icons-material/Translate";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import "./styles.css";
import MenuDrawer from "./Menu";

export default function Header(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  // const navigate = useNavigate();
  // const go2 = (path) => () => navigate(path);

  const handleOpenTranslation = (event) => setAnchorEl(event.currentTarget);

  const handleOpenDrawer = () => setOpenDrawer(true);

  const handleCloseDrawer = () => setOpenDrawer(false);

  const handleCloseTranslation = () => setAnchorEl(null);

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          elevation={0}
          position="static"
          sx={{ background: (theme) => theme.palette.background.paper }}
        >
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              World Delete
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              How it works
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              FAQ
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Introduction
            </Typography>

            <div>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <SearchIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenTranslation}
                color="inherit"
              >
                <TranslateIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseTranslation}
              >
                <MenuItem onClick={handleCloseTranslation}>English</MenuItem>
                <MenuItem onClick={handleCloseTranslation}>Español</MenuItem>
              </Menu>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleOpenDrawer}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="_height_header_" />
      <MenuDrawer open={openDrawer} onClose={handleCloseDrawer} on />
    </>
  );
}

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide id="header_component" appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
