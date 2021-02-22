import { Center } from "@chakra-ui/react";
import Hero from "../components/Hero";
import { data } from '../data/panels'

export default function LandingPage ( { heros } ) {
	return (
		<Center flexDirection="column">
			{heros.map( ( hero, i ) => (
				<Hero key={ i } idx={ i } panels={ hero.panels } variant={ hero.variant } />
			) ) }
		</Center>
	)
}

export async function getStaticProps () {
	return {
		props: { heros: data },
	};
}
