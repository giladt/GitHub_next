import { Center } from "@chakra-ui/react";
import Hero from '../components/Hero'

export default function LandingPage() {
  return ( 
    <Center d="flex" flexDirection="column">
      <Hero variant="video" />
      <Hero />
    </Center>
  )
}
