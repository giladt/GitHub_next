import { Wrap, Text, Box , Heading, Button, Image } from "@chakra-ui/react";
import Panel from './panel'
import Link from 'next/link'

function Hero() {
    return (
      <Wrap w="clamp(300px, calc(100vw - 20px), 1000px)" m="1">
        <Panel>
          <Box m="20px">
            <Image src="/images/title.png" alt="gr8hub" mb={8} width="250px"/>
            <Heading size="xl" mb={-1} as="h1">
              Lern von Menschen, 
            </Heading>
            <Text  fontSize="2xl" mb={6}>
              nicht nur von ihren Videos.
            </Text>
            <Text fontSize="sm" mb={6}>
              Wir machen Weiterbildung und Beratung einfach,<br />
              kostengünstig sowie jederzeit und überall möglich.
            </Text>
            <Button size="lg" colorScheme="purple" mt="40px" >
              <Link href="/anmeldung">
                <a>Kostenlos Platz sichern</a>
              </Link>
            </Button>
          </Box>
        </Panel>
        <Panel>
        <Image src="https://gr8hub.com/wp-content/uploads/2021/02/Feature-Mockup.png" alt="mobile" mb={8}/>
          
          
        </Panel>
      </Wrap>
    )
}

export default Hero
