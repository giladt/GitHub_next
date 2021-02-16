import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { theme } from "../../src/styles/theme";

export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<div>
				<Navbar />
				<Component {...pageProps} />
			</div>
		</ChakraProvider>
	);
}
