import { Wrap, Text, Box , Heading, Button, Image } from "@chakra-ui/react";
import Panel from './panel';
import Link from 'next/link'

function Hero() {
    return (
      <Wrap w="clamp(300px, calc(100vw - 20px), 1000px)" m="1"  textAlign="center">
        <Panel>
          <Box m="20px">
            <Image src="/images/title.png" alt="gr8hub" mb={8} width="250px" mx="auto"/>
            <Heading size="xl" mb={-1} as="h1" align="center">
                Mit Menschen vernetzen. 
            </Heading>
            <Text  fontSize="2xl" mb={6} >
              Von Kompetenzen profitieren. 
            </Text>
            <Text fontSize="sm" mb={6} >
              Weiterbildung und Beratung einfach, günstig <br />
              sowie jederzeit und überall möglich.
            </Text>
            <Button size="lg" colorScheme="purple" mt="40px" >
              <Link href="/anmeldung">
                <a>Kostenlos Platz sichern</a>
              </Link>
            </Button>
          </Box>
        </Panel>
       
      </Wrap>
    )
}

export default Hero
