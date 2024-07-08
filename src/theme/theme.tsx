import { background, extendTheme } from '@chakra-ui/react'


// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  blue: {
    100: "#090B0D",
    200: "#2128BD",
    300: "#191D22",
  },
  white: {
    100: "#fff",

  }
}
const components = {
  Heading: {
    variants: {
      h1: {

        fontSize: '48px',
        color: "white.100"
      }
    }
  },
  Input: {
    variants: {
      "white-input": {
        field: {

          borderRadius: "100px !important",
          backgroundColor: "transparent",
          height: "100%",
          border: "none",
          outlineF: "none",

        }

      }
    }
  },
  Text: {
    variants: {
      p1: {

        fontSize: '18px',
        color: "white.100"
      }
    }
  },
  Button: {
    variants: {
      "solid-blue": {
        fontSize: "15px",
        fontWeigh: 500,
        letterSpacing: "1px",
        backgroundColor: "blue.200",
        height: "50px",
        width: "140px",
        borderRadius: "100px",
        color: 'white.100'
      },
      "outline-blue": {
        fontSize: "15px",
        fontWeigh: 500,
        letterSpacing: "1px",
        border: "2px solid",
        borderColor: "blue.200",
        backgroundColor: "blue.300",
        height: "46px",
        boxShadow: "0px 4px 20px 0px #FFFFFF33",
        width: "170px",
        borderRadius: "100px",
        color: 'white.100'
      }
    }
  }
}

const theme = extendTheme({ colors, components })
export { theme }