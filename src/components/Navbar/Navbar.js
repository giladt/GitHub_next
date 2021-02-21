import Link  from "next/link";
import { Image, Button, Box, Flex, Spacer } from "@chakra-ui/react"


function Navbar() {
  return (
    <Box as="nav" bg="white" boxShadow="0 2px 5px 0 #e5e5e5" position="sticky" top="0" zIndex="999" minW="250px">
      <Flex h="80px" w="100%" justify="space-between" align="center" px="60px"> 
        <Link href="/">
          <a><Image src="/images/title.png" alt="gr8hub" h="40px"/></a> 
        </Link>
        <Button variant="outline">
          <Link href="/mentor-werden">
            <a>Mentor werden</a>
          </Link>
        </Button>
      </Flex>
    </Box>
  )
}

export default Navbar
