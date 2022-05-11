import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#15202B",
      // default: "#0A192F",
    },
    text: {
      primary: "#ffffff",
      secondary: "#8892B0",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

// #0A192F background
// #8892B0 grey
