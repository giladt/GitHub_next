import { extendTheme } from "@chakra-ui/react";

const Button = {
  // The styles all button have in common
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
				color: "#fff",
				boxShadow: "none",
			},
    },
    solid: {
      bg: "#8a4af3",
      color: "white",
	  	boxShadow: "0.2rem 0.2rem 0 0 #8beaa1",
			_hover: {
				bg: "#50d270",
				boxShadow: "none",
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
	fonts: {
		body: "'Roboto', sans-serif",
		heading: "'Roboto Mono', monospace",
		mono: "'Roboto Mono', monospace",
	},
});
