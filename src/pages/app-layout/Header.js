import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import "./styles.css";
import MenuDrawer from "./Menu";
import useResponsive from "../../hooks/useResponsive";
import Box from "@mui/material/Box";
import logo from "../../assets/logo.png";
import { ExpandMore } from "@mui/icons-material";

export default function Header(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const { isSmallScreen } = useResponsive();

  const handleOpenTranslation = (event) => setAnchorEl(event.currentTarget);

  const handleToggleDrawer = () => setOpenDrawer((prev) => !prev);

  const handleCloseTranslation = () => setAnchorEl(null);

  const linkStyle = {
    flexGrow: 1,
    color: "white",
    display: "inline-block",
  };

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          elevation={0}
          position="static"
          sx={{
            background: (theme) => theme.palette.background.paper,
            px: 5,
            pt: 5,
          }}
        >
          <Toolbar sx={{ zIndex: !isSmallScreen ? 1400 : 400 }}>
            <Box width={"20%"} display={"flex"} alignContent={"center"}>
              <Link
                to="/"
                underline="none"
                component={RouterLink}
                sx={{ flexGrow: 1 }}
              >
                <img
                  src={logo}
                  alt="World Delete Logo"
                  style={{ marginTop: 16 }}
                />
              </Link>
            </Box>
            {!isSmallScreen && (
              <Box display={"flex"} flexGrow={1} alignContent={"center"}>
                <Link
                  component={RouterLink}
                  to="/how-it-work"
                  underline="none"
                  sx={{
                    textAlign: "right",
                    maxWidth: 320,
                    pr: 3.5,
                    ...linkStyle,
                  }}
                >
                  How it work
                </Link>
                <Link
                  component={RouterLink}
                  to="/faq"
                  underline="none"
                  sx={{ maxWidth: 50, ...linkStyle }}
                >
                  FAQ
                </Link>
                <Link
                  component={RouterLink}
                  to="/introduction"
                  underline="none"
                  sx={{ pl: 3, maxWidth: 320, ...linkStyle }}
                >
                  Introduction
                </Link>
              </Box>
            )}
            <Box display={"flex"} alignContent={"center"} alignItems={"center"}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 1 }}
              >
                <SearchIcon />
              </IconButton>
              <EnglandIcon />
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenTranslation}
                color="inherit"
                sx={{ mr: 2 }}
              >
                <ExpandMore />
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
                onClick={handleToggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <MenuDrawer open={openDrawer} on onClose={handleToggleDrawer} />
    </>
  );
}

const EnglandIcon = () => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_669_27311)">
      <rect
        x="-0.000488281"
        y="0.5"
        width="16"
        height="16"
        rx="8"
        fill="white"
      />
      <g clip-path="url(#clip1_669_27311)">
        <rect
          x="-0.000488281"
          y="0.5"
          width="16"
          height="16"
          rx="8"
          fill="white"
        />
        <g clip-path="url(#clip2_669_27311)">
          <path
            d="M-3.19238 0.621948H40.8076V32.6219H-3.19238V0.621948Z"
            fill="#000066"
          />
          <path
            d="M-3.19238 0.621948H18.8076V16.6219H-3.19238V0.621948Z"
            fill="#012169"
          />
          <path
            d="M-0.614258 0.621948L7.77324 6.65528L16.1264 0.621948H18.8076V2.68862L10.5576 8.65528L18.8076 14.5886V16.6219H16.0576L7.80762 10.6553L-0.408008 16.6219H-3.19238V14.6219L5.02324 8.68862L-3.19238 2.75528V0.621948H-0.614258Z"
            fill="white"
          />
          <path
            d="M11.3826 9.98862L18.8076 15.2886V16.6219L9.49199 9.98862H11.3826ZM5.05762 10.6553L5.26387 11.8219L-1.33613 16.6219H-3.19238L5.05762 10.6553ZM18.8076 0.621948V0.721948L10.2482 6.98862L10.317 5.52195L17.0889 0.621948H18.8076ZM-3.19238 0.621948L5.02324 6.48862H2.96074L-3.19238 2.02195V0.621948Z"
            fill="#C8102E"
          />
          <path
            d="M5.09199 0.621948V16.6219H10.592V0.621948H5.09199ZM-3.19238 5.95528V11.2886H18.8076V5.95528H-3.19238Z"
            fill="white"
          />
          <path
            d="M-3.19238 7.05528V10.2553H18.8076V7.05528H-3.19238ZM6.19199 0.621948V16.6219H9.49199V0.621948H6.19199Z"
            fill="#C8102E"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_669_27311">
        <rect
          x="-0.000488281"
          y="0.5"
          width="16"
          height="16"
          rx="8"
          fill="white"
        />
      </clipPath>
      <clipPath id="clip1_669_27311">
        <rect
          x="-0.000488281"
          y="0.5"
          width="16"
          height="16"
          rx="8"
          fill="white"
        />
      </clipPath>
      <clipPath id="clip2_669_27311">
        <rect
          width="22"
          height="16"
          fill="white"
          transform="translate(-3.00049 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

const MenuIcon = () => (
  <svg
    width="43"
    height="43"
    viewBox="0 0 43 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="11.9995" y="19" width="19" height="1" fill="white" />
    <rect x="11.9995" y="23" width="19" height="1" fill="white" />
    <rect x="0.499512" y="0.5" width="42" height="42" rx="21" stroke="white" />
  </svg>
);

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
