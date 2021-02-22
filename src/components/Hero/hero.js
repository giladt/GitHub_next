import { Center, Wrap, Text, Box, Heading, Button, AspectRatio, Image, Flex, Square, Divider } from "@chakra-ui/react";

import Panel from './panel';
import Link from 'next/link'
import { useEffect } from 'react'

function HeroVideo ( { panel } ) {
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
        w="100%" h="calc(100vh - 80px)"
        ratio={ 16 / 9 } >
        { panel.vid && (
          <video src={ panel.vid } style={ { opacity: 0.25 } } />
        ) }
      </AspectRatio>
      <Center w="100%" color="text.darkBG" mx="auto" mt="calc(-100vh + 80px)" h="calc(100vh - 80px)">
        { panel &&
          <HeroNormal panels={ [ panel ] } />
        }
      </Center>
    </Box>
  )
}

function HeroNormal ( { panels } ) {
  return (
    <Wrap textAlign="center">
      { panels.map( ( panel, i ) => (
        <Panel idx={ panels.length === 1 ? -1 : i }>
          <Box w="100%" mt="2rem">
            { panel.mainTitle && panel.mainTitle.split( "." ).map( ( title, i ) => (
              <Heading key={ i } size="2xl" as="h1" mb={ 6 } align="center">
                { title }
              </Heading>
            ) ) }

            { panel.subTitle && panel.subTitle.split( "." ).map( ( subTitle, i ) => (
              <Heading key={ i } size="md" as="h2" mb={ 6 } align="center">
                { subTitle }
              </Heading>
            ) ) }

            { panel.title && panel.title.split( "." ).map( ( title, i ) => (
              <Heading key={ i } size="xl" as="h1" mb={ 6 } align="center">
                { title }
              </Heading>
            ) ) }

            { panel.img && (
              <Image src={ panel.img } />
            )}

            { panel.body && (
              <Text fontSize="xl" mb={ 6 } >{ panel.body }</Text>
            )}

            { panel.ctx_text && (
              <Button size="lg" mt="40px" variant="solid">
                <Link href="/anmeldung">
                  <a><Text fontWeight="700">{ panel.ctx_text }</Text></a>
                </Link>
              </Button>
            ) }
          </Box>
        </Panel>
      ) ) }
    </Wrap>
  )
}

function HeroHover ( { title, panels } ) {
  return (
    <Flex id="hero-hover" flex="1" wrap="wrap" justify="space-evenly" direction="row">
      { title && 
        <Flex id="title" direction="column" w="100%">
          <Heading size="xl" as="h1" mb={ 6 } align="center">
            { title }
          </Heading>
        </Flex>
      }

      { panels.map((panel,i)=>(
        <Flex key={i} id="left" direction="column">
          <Square size="30rem" id="left-square" mx="auto" align="center" >
            <Image
              src={ panel.img_bg }
              w="100%"
              h="100%"
              transform={ `rotate(${ [ 0, 166 ][ i % 2 ] }deg)` }
            />
            <Image
              src={ panel.img }
              position="absolute"
              borderRadius="50%"
              boxShadow="0.1rem 0.1rem 1rem 0.25rem #00000070"
            />
          </Square>
          <Text fontFamily="mono" fontWeight="500" color="text.primary" w="30rem">{ panel.body }</Text>
        </Flex>
      ))}
    </Flex>
  )
}

export const Hero = ( { idx, title, panels, variant } ) => {
  return (
    <>
      {( variant === 'video' ) && <HeroVideo panel={ panels[ 0 ] } /> }
      {( variant === 'normal' ) && (
        <Center w="calc(100% - 120px)" color="text.primary" m="auto" minH="900px">
          <HeroNormal key={ 1 } idx={ idx } panels={ panels } />
        </Center>
      ) }
      {( variant === 'hover' ) && (
        <Center w="calc(100% - 120px)" color="text.primary" m="auto" minH="900px">
          <HeroHover key={ 1 } panels={ panels } title={ title } />
        </Center>
      ) }
    </>
  )
}

export default Hero;


/* 
    <Wrap textAlign="center" w="calc(100% - 120px)">
      { panels.map( ( panel, i ) => (
        <>
          <Panel>
            <Box m="5rem" transform="skew(-25deg)" overflow="hidden" position="relative" >
              <Box
                align="center"
                w="25rem" h="30rem"
                position="absolute"
                top="-30px"
                bottom="-30px"
                left="-30px"
                right="-30px"
                transform="skew(25deg)">
                { panel.title && panel.title.split( "." ).map( ( title, i ) => (
                  <Heading key={ i } size="xl" as="h1" align="center">
                {title}
              </Heading>
              ))}
                <Image
                  src={ panel.img_bg }
                  position="relative"
                  w="25rem"
                  h="25rem"
                  transform={ `rotate(${ [ 0, 166 ][ i % 2 ] }deg)` }
                />
                <Image
                  src={ panel.img }
                  position="relative"
                  mt="-18.5rem"
                  w="12.5rem"
                  h="12.5rem"
                  borderRadius="50%"
                  boxShadow="0.1rem 0.1rem 1rem 0.25rem #000000a0"
                />
                <Text fontSize="xl" mt={ 12 } p={ 6 } >
                  { panel.body }
                </Text>
                { panel.ctx_text && (
                <Button size="lg" mt="40px" variant="solid">
                  <Link href="/anmeldung">
                      <a>{ panel.ctx_text }</a>
                  </Link>
                </Button>
              )}
              </Box>
            </Box>
          </Panel>
          {i < panels.length - 1 &&
            <Divider d={ { sm: "none", md: "none", lg: "block", xl: "block" } } h="inherit" transform="rotate(25deg)" borderColor="primary.500" orientation="vertical" />
          }
        </>
      ) ) }
    </Wrap>

*/