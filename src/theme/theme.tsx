import {  extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  blue: {
    100: "#090B0D",
    200: "#2128BD",
    300: "#191D22",
  },
  gray: {
    100: "#8E8E8E",
  },
  white: {
    100: "#fff",
  },
};
const components = {
  Heading: {
    variants: {
      h1: {
        fontSize: ["25px", "28px", "38px", "48px", "48px", "48px"],
        // lineHeight:['37px','37px','37px','48px','48px','48px'],
        color: "white.100",
      },
    },
  },
  Input: {
    variants: {
      "white-input": {
        field: {
          _placeholder: {
            color: "gray.100",
            fontSize: "15px",
            fontFamily: "matter-reg",
          },
          paddingLeft: "28px",
          paddingBottom: "2px",

          borderRadius: "100px !important",
          fontFamily: "matter-medium",

          backgroundColor: "transparent",
          height: "100%",
          border: "none",
          outlineF: "none",
        },
      },
    },
  },
  Text: {
    variants: {
      p1: {
        fontSize: ["14px", "15px", "15px", "18px", "18px", "18px"],
        fontFamily: "matter",
        color: "white.100",
      },
    },
  },
  Button: {
    variants: {
      "solid-blue": {
        fontSize: { lg: "14px", base: "12px" },
        border: "none",
        outline: "none",
        fontWeigh: 400,

        letterSpacing: "1px",
        backgroundColor: "blue.200",
        height: { lg: "50px", base: "45px" },
        width: { lg: "140px", base: "120px" },
        borderRadius: "100px",
        fontFamily: "matter",

        color: "white.100",
      },
      "outline-blue": {
        fontSize: "14px",
        fontWeigh: 500,
        fontFamily: "matter",
        // letterSpacing: "1px",

        border: "2px solid",
        borderColor: "blue.200",
        backgroundColor: "blue.300",
        height: "46px",
        boxShadow: "0px 4px 20px 0px #FFFFFF33",
        width: "150px",
        borderRadius: "100px",
        color: "white.100",
      },
    },
  },
};

const theme = extendTheme({ colors, components });
export { theme };
