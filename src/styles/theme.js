import { extendTheme } from "@chakra-ui/react";

export const gr8hubTheme = extendTheme({
	colors: {
		brand: {
			100: "#f7fafc",
			grey: "#1a202c",

		},
	},
})

export const theme = extendTheme({
	fonts: {
		body: "'Roboto', sans-serif",
		heading: "'Ballet', monospace",
		mono: "'Roboto Mono', monospace",
	},
});
