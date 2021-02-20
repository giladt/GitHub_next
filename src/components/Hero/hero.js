import { Center, Wrap, Text, Box, Heading, Button, AspectRatio } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

import Panel from './panel';
import Link from 'next/link'
import { useEffect } from 'react'

function HeroVideo ({copy}) {
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
        <HeroNormal copy={copy}/>
      </Center>
    </Box>
  )
}

function HeroNormal ( { copy } ) {
  return (
    <Wrap textAlign="center" w="calc(100% - 120px)">
      <Panel>
        <Box>
          {copy.title && copy.title.split(".").map(title=>(
            <Heading size="xl" as="h1" mb={6} align="center">
              {title}
            </Heading>
          ))}
          <Text fontSize="xl" mb={ 6 } >
            {copy.body}
          </Text>
          {copy.buttonCopy &&(
            <Button size="lg" mt="40px" variant="solid">
              <Link href="/anmeldung">
                <a>{copy.buttonCopy}</a>
              </Link>
            </Button>
          )}
        </Box>
      </Panel>
    </Wrap>
  )
}

function Hero ( { variant, ...props } ) {
  return ( variant === 'video' ) ?
    <HeroVideo { ...props } /> :
    <Center w="calc(100% - 120px)" m="auto" h="900px">
      <HeroNormal { ...props } />
    </Center>
}

export default Hero;
