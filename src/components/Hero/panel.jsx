import { Center, WrapItem } from "@chakra-ui/react";

export default function Panel({children}){
  return (
    <WrapItem flex={1} minW="300px">
      <Center w="100%" h="50vh">
        {children}
      </Center>
    </WrapItem>
  )
}