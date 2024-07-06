import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    nav_text: string;
    main_bg: string;
  }
  interface PaletteOptions {
    nav_text: string;
    main_bg: string;
  }
}

const theme = createTheme({
  palette: {
    nav_text: "#9395B8",
    main_bg: "#EEF0F7",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1160, // Custom breakpoint for 1160px
      xl: 1920,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#EEF0F7",
          fontFamily: "Inter, sans-serif",
        },
      },
    },
  },
});

export default theme;
