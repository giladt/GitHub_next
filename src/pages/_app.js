import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { theme } from "../../src/styles/theme";
import { Fonts } from "../styles/fonts";

const gr8hubTheme = extendTheme(theme)

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={gr8hubTheme}>
			<Fonts />
			<Navbar />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
