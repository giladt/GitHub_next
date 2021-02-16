import { Box, Center, Square, Circle } from "@chakra-ui/react";

export default function LandingPage() {
	return (
		<div>
			<h1>Home Page</h1>
			<Box bg="tomato" w="100%" p={4} color="white">
				<p>this is text</p>
			</Box>

			<Center bg="brand.grey" m="10" w="100%" p={4} color="white">
				<p>put text in the middle</p>
			</Center>
		</div>
	);
}
