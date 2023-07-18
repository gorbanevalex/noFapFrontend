import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#faa233",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          borderRadius: 28,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: "14px", // Adjust the font size as needed
          border: "none", // Remove the borders
        },
      },
    },
  },
  shape: {
    borderRadius: 10,
  },
  typography: {
    h1: {
      fontSize: "clamp(2rem, 1.2857rem + 3.5714vw, 4rem)",
      fontWeight: 800,
    },
    h2: {
      fontSize: "clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",
      fontWeight: 800,
    },
    h3: {
      fontSize: "2.25rem",
      fontWeight: 400,
    },
    h4: {
      fontSize: "1.75rem",
      fontWeight: 400,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    subtitle1: {
      color: "#a2a1a1",
    },
    subtitle2: {
      color: "#a2a1a1",
      fontWeight: 400,
    },
  },
});