import { Center } from "@chakra-ui/react";
import Hero from "../components/Hero";

export default function LandingPage ( { heros } ) {
	return (
		<Center flexDirection="column">
			<Hero idx={ 1 } panels={ heros[ 0 ].panels } variant={ heros[ 0 ].variant } />
			<Hero idx={ 2 } panels={ heros[ 1 ].panels } variant={ heros[ 1 ].variant } />
			<Hero idx={ 3 } panels={ heros[ 2 ].panels } variant={ heros[ 2 ].variant } />
			<Hero idx={ 4 } panels={ heros[ 3 ].panels } variant={ heros[ 3 ].variant } title={ heros[ 3 ].title } />
		</Center>
	)
}

export async function getStaticProps() {
	const response = await fetch("http://localhost:3000/api/copy");
	const { data } = await response.json();

	return {
		props: { heros: data },
	};
}
