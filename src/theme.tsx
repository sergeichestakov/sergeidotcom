import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = { mono: `'Menlo', monospace`, inter: "Inter" };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

export default extendTheme({
  colors: {
    black: "#16161D",
    twitterBlue: "#55acee",
    linkedinBlue: "#0077B5",
    emailGrey: "#a7adba",
    russianBlue: "#0072CE",
    githubGrey: "#adbac7",
  },
  styles: {
    global: {
      body: {
        fontSize: 16,
        fontFamily: "Inter",
        "::-webkit-scrollbar": {
          width: "8px",
        },
        "::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(155, 155, 155, 0.5)",
          borderRadius: "20px",
          border: "transparent",
        },
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Inter",
        fontWeight: "normal",
      },
    },
  },
  fonts,
  breakpoints,
});
