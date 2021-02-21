import { Center, Text, Box, Heading, Button, WrapItem } from "@chakra-ui/react";


export default function Panel({idx, children}){

  // let titleArr = copy.title.split(".")
  
  return (
    <WrapItem flex={1} minW="250px">
      <Center h="100%" w="100%" textAlign={idx<0 ? "center" : idx % 2 !== 0 ? "start" : "end"} p="1rem">
        {children}
      </Center>
    </WrapItem>
  )
}