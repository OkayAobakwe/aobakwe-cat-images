import { InputGroup, Input, InputRightElement, IconButton, VStack } from "@chakra-ui/react"
import React from "react"
import { SearchIcon } from "@chakra-ui/icons"

export const Search = () => {
  return(
    <VStack
      justify={"center"}
      m="auto"
    >
      <InputGroup size="md" m="auto">
        <Input
          placeholder="Search for a cat"
        />
        <InputRightElement width="4.5rem">
          <IconButton aria-label="Cat Search" icon={<SearchIcon />}/>
        </InputRightElement>
      </InputGroup>
    </VStack>
  )
}