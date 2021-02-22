import { extendTheme } from "@chakra-ui/react";

import { createBreakpoints } from "@chakra-ui/theme-tools"

const Button = {
  baseStyle: {
    fontWeight: "normal",
    fontFamily: "Roboto",
		borderRadius: "10px",
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "0.75rem",
      padding: "1rem 2rem",
    },
    md: {
      fontSize: "1rem",
      padding: "1.5rem 3rem",
    },
    lg: {
      fontSize: "1.25rem",
      padding: "2rem 4rem",
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "none",
	  	boxShadow: "0.2rem 0.2rem 0 0 #8beaa1",
			color: "#8a4af3",
			_hover: {
				bg: "#50d270",
        boxShadow: "0.2rem 0.2rem 0 0 #8beaa1",
        color: "#fff",
			},
    },
    solid: {
      bg: "#8a4af3",
      color: "text.darkBG",
	  	boxShadow: "0.2rem 0.2rem 0 0 #8beaa1",
			_hover: {
				bg: "#50d270",
        boxShadow: "0.2rem 0.2rem 0 0 #8beaa1",			
			},
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
}

export const theme = extendTheme({
	components: {
		Button,
	},
  breakpoints: createBreakpoints( {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  } ),
  colors: {
    primary: {
      100: "#510bc2",
      200: "#6a29d4",
      300: "#7539d6",
      400: "#7f37f3",
      500: "#8a4af3",
      600: "#8e56e7",
      700: "#9965ee",
      800: "#9c73df",
      900: "#b991fa",
    },
    secondary: {
      100: "#0b7c27",
      200: "#18a13b",
      300: "#22b848",
      400: "#3acc5f",
      500: "#50d270",
      600: "#6fe08b",
      700: "#94ebaa",
      800: "#a6ebb7",
      900: "#bcfacc",
    },
    text: {
      primary: "#04254E",
      darkBG: "#fff",
    }
  },
	fonts: {
    body: "Roboto, sans-serif",
		heading: "'Roboto Mono', monospace",
		mono: "'Roboto Mono', monospace",
	},
});
