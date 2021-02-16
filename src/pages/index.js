import { Center } from "@chakra-ui/react";
import Hero from '../components/Hero'

export default function LandingPage() {
  return ( 
    <Center w="clamp(300px, calc(100vw - 20px), 1000px)" m="auto" h="calc(100vh - 80px)">
      <Hero />
    </Center>
  )
}
