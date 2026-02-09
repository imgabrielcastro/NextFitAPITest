import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
    h4: {
      fontWeight: "bold",
    },
  },
  palette: {
    primary: {
      main: "#8323A0",
    },
    secondary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#EEEEEE",
    },
    text: {
      primary: "#616161",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
