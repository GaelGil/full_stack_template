import { createTheme } from "@mantine/core";
import type { CSSVariablesResolver } from "@mantine/core";

export const theme = createTheme({
  /** Define your brand colors */
  colors: {
    brand: [
      "#ffffff", // shade 0 - pure white
      "#afafaf", // shade 8 - light gray
      "#303030", // shade 2 - dark gray
      "#303030", // shade 5 - dark gray (duplicate)
      "#414141", // shade 3 - darker gray
      "#212121", // shade 1 - very dark gray
      "#181818", // shade 6 - almost black
      "#0d0d0d80", // shade 4 - semi-transparent black
      "#000d33", // shade 9 - very dark blue
      "#000000", // shade 7 - pure black
    ],
  },

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },
  /** Set your primary color */
  primaryColor: "brand",

  components: {}, // default theme (can be 'dark')
});

export const cssResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--mantine-color-text-primary": theme.colors.brand[9],
    "--mantine-color-text-secondary": theme.colors.brand[8],
    "--mantine-color-text-tertiary": theme.colors.brand[7],
    "--mantine-color-text-quaternary": theme.colors.brand[6],
    "--mantine-color-accent": theme.colors.brand[9],
    "--mantine-color-background": theme.colors.brand[0],
    "--mantine-color-background-secondary": theme.colors.brand[1],
    "--mantine-color-background-tertiary": theme.colors.brand[2],
  },
  light: {},
  dark: {},
});
