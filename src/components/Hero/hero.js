import { Center, Wrap, Text, Box, Heading, Button, AspectRatio } from "@chakra-ui/react";
import Panel from './panel';
import Link from 'next/link'
import { useEffect } from 'react'

function HeroVideo () {
  useEffect( () => {
    const videos = [ ...document.getElementsByTagName( 'video' ) ]
    videos.forEach( video => {
      video.muted = true
      video.loop = true
      video.play()
    } )
  }, [] )

  return (
    <Box w="100%">
      <AspectRatio
        style={ { zIndex: -2 } }
        bg="rgba(0,0,128,0.5)"
        w="100%" h="820px"
        ratio={ 16 / 9 } >
        <video src="https://gr8hub.s3.eu-central-1.amazonaws.com/Landing+Page/Gr8hub+Landing+Page+Background.mp4" style={ { opacity: 0.25 } } />
      </AspectRatio>
      <Center w="calc(100% - 120px)" m="auto" mt="-820px" h="820px">
        <HeroNormal />
      </Center>
    </Box>
  )
}

function HeroNormal ( { header, body } ) {
  return (
    <Wrap textAlign="center" w="calc(100% - 120px)">
      <Panel>
        <Box>
          <Heading size="xl" as="h1" align="center">
            Mit Menschen vernetzen.
            </Heading>
          <Heading size="xl" mb={ 6 } >
            Von Kompetenzen profitieren.
            </Heading>
          <Text fontSize="xl" mb={ 6 } >
            Weiterbildung und Beratung einfach, günstig
            sowie jederzeit und überall möglich.
            </Text>
          <Button size="lg" mt="40px" variant="solid">
            <Link href="/anmeldung">
              <a>Kostenlos Platz sichern</a>
            </Link>
          </Button>
        </Box>
      </Panel>
    </Wrap>
  )
}

function Hero ( { variant, ...props } ) {
  return ( variant === 'video' ) ?
    HeroVideo() :
    <Center w="calc(100% - 120px)" m="auto" h="900px">
      <HeroNormal { ...props } />
    </Center>
}

export default Hero
