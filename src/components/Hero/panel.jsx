import { Center, WrapItem } from "@chakra-ui/react";
import { Wrap, Text, Box, Heading, Button, Image } from "@chakra-ui/react";
import Link from "next/link";


export default function Panel({copy}){

  let titleArr = copy.title.split(".")
  
  return (
    <WrapItem flex={1} minW="300px">
      <Center w="100%" bg="white" h="50vh">
      <Box m="20px">
					<Heading size="xl" as="h1" align="center">
					{titleArr[0]}.
					</Heading>
					<Heading size="xl" mb={6}>
					{titleArr[1]}.
					</Heading>
					<Text fontSize="sm" mb={6}>
          {copy.body}
					</Text>
					<Button size="lg" colorScheme="purple" mt="40px">
						<Link href="/anmeldung">
							<a>{copy.buttonCopy}</a>
						</Link>
					</Button>
				</Box>
      </Center>
    </WrapItem>
  )
}