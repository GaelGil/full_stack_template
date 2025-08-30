import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /** Define your brand colors */
  colors: {
    brand: [
      "#ffffff",
      "#afafaf",
      "#414141",
      "#303030",
      "#303030",
      "#212121",
      "#181818",
      "#0d0d0d80",
      "#000d33",
      "#000000",
    ],
  },

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },
  /** Set your primary color */
  primaryColor: "brand",

  components: {
    AppShell: {
      defaultProps: {
        padding: "md",
        styles: (theme) => ({
          main: {
            // You can use a fixed background here or refer to CSS variables
            backgroundColor: "#212121", // your default background
          },
        }),
      },
    },
  }, // default theme (can be 'dark')
});
