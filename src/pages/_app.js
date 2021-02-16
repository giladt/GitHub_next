<<<<<<< HEAD
import Navbar from '../components/Navbar';
import '../styles/app.css';

export default function App({ Component, pageProps}) {
  return (
    <div> 
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
=======
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
>>>>>>> 1d589db57723587013da6cec983c8a72f19fffec
}
