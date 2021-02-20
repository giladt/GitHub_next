import { Center } from "@chakra-ui/react";
import Hero from "../components/Hero";

export default function LandingPage({ copy }) {
	return (
			<Center
				w="clamp(300px, calc(100vw - 20px), 1000px)"
				m="auto"
				h="calc(100vh - 80px)"
			>
        <Hero copy={copy[0]} variant="video" />
				<Hero copy={copy[1]} />
			</Center>
	);
}

export async function getStaticProps() {
	const response = await fetch("http://localhost:3000/api/copy");
	const { data } = await response.json();

	return {
		props: { copy: data },
	};
}
