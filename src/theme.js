import { createTheme } from "@mui/material/styles";

const Typography = {
  fontSize: 14,
  htmlFontSize: 14,
  useNextVariants: true,
  h1: {
    fontSize: "2rem",
  },
  h2: {
    fontSize: "1.38rem",
  },
  h3: {
    fontSize: "1.3rem",
  },
  h4: {
    fontSize: "1.2rem",
  },
  h5: {
    fontSize: "1.2rem",
  },
  h6: {
    fontSize: "1rem",
  },
};

// A custom theme for this app
const theme = createTheme({
  typography: Typography,
  palette: {
    mode: "dark",
    background: {
      paper: "#111",
      default: "#111",
    },
    primary: {
      main: "#E5453A",
    },
    secondary: {
      main: "#244DDB",
    },
  },
});

export default theme;
