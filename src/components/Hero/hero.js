import { Wrap, Text, Box, Heading, Button, Image } from "@chakra-ui/react";
import Panel from "./panel";
import Link from "next/link";
//import { data } from "../../data/panels";

function Hero({ copy }) {
	return (
		<Wrap w="clamp(300px, calc(100vw - 20px), 1000px)" m="1" textAlign="center">
			<Panel copy={copy} />
		</Wrap>
	);
}

export default Hero;
