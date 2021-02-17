import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { gr8hubTheme } from "../../src/styles/theme";
import { Global } from "@emotion/react";
import fonts from "../../src/styles/font-face"

const theme = extendTheme(gr8hubTheme)

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Global styles={fonts} />
			<Navbar />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
