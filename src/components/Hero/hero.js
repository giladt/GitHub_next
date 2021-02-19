import { Wrap, Text, Box , Heading, Button, Image } from "@chakra-ui/react";
import Panel from './panel';
import Link from 'next/link'

function Hero() {
    return (
      <Wrap w="clamp(300px, calc(100vw - 20px), 1000px)" m="1"  textAlign="center">
        <Panel>
          <Box m="20px">
            <Heading size="xl" as="h1" align="center">
                Mit Menschen vernetzen. 
            </Heading>
            <Heading  Size="xl" mb={6} >
              Von Kompetenzen profitieren. 
            </Heading>
            <Text fontSize="sm" mb={6} >
              Weiterbildung und Beratung einfach, günstig
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
