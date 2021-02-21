import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { theme } from "../../src/styles/theme";
import { Fonts } from "../styles/fonts";

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<Navbar />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
