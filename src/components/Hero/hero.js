import { Wrap, Text, Box , Heading, Button, Image } from "@chakra-ui/react";
import Panel from './panel'

function Hero() {
    return (
      <Wrap w="clamp(300px, calc(100vw - 20px), 1000px)" m="1">
        <Panel>
          <Box m="20px" as="kbd">
            <Image src="https://gr8hub.com/wp-content/uploads/2020/10/cropped-Logo.png" alt="gr8hub" mb={8} width="250px"/>
            <Text fontSize="3xl" mb={-1}>
              Lern von Menschen, 
            </Text>
            <Text  fontSize="2xl" mb={6}>
              nicht nur von ihren Videos.
            </Text>
            <Text fontSize="sm" mb={6} as="kbd">
              Wir machen Weiterbildung und Beratung einfach,<br />
              kostengünstig sowie jederzeit und überall möglich.
            </Text>
            <Button size="lg" colorScheme="purple" mt="40px" >
              Kostenlos Platz sichern
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
