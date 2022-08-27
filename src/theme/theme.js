import { extendTheme } from "@chakra-ui/react";

// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        padding: 0,
        margin: 0,
        border: 0,
        boxSizing: "border-Box",
        bg: "gray.100",
        minH: "100vh",
        minW: "100%",
        color: "#000000",
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});

export default theme;
