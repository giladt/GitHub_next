import { Wrap, Text, Box , Heading, Button } from "@chakra-ui/react";
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
          <Heading size="xl" mb={6} >
            Von Kompetenzen profitieren. 
          </Heading>
          <Text fontSize="xl" mb={6} >
            Weiterbildung und Beratung einfach, günstig
            sowie jederzeit und überall möglich.
          </Text>
          <Button size="lg" mt="40px" variant="solid">
            <Link href="/anmeldung">
              <a>Kostenlos Platz sichern</a>
            </Link>
          </Button><br/><br/>
          <Button size="md" mt="40px" variant="outline">Test</Button><br/><br/>
          <Button size="sm" mt="40px" variant="solid">Test</Button><br/><br/>
        </Box>
      </Panel>
    </Wrap>
  )
}

export default Hero
