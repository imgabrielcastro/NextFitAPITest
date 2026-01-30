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
      main: "#833AB4",
    },
    secondary: {
      main: "#FFFFFF",
    },
    background: {
      default: "#EEEEEE",
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
