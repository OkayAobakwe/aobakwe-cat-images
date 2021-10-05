import { Container, Flex, Heading } from "@chakra-ui/layout"
import React, { FC, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Button } from "@chakra-ui/button"
import NextLink from "next/link"
import { NavBar } from "../../components/Navbar"

const Breeds: FC = () => {
  const [breeds, setBreeds] = useState<any>()
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "90316368-18c6-4271-aeaf-ef3b88cb5f03"
      }
    })
    .then(data => data.json())
    .then(data => setBreeds(data))
  }, [])
  return(
    <>
      <NavBar />
      <Container centerContent>
        <Heading>Breeds</Heading>
      </Container>
      <Flex flexDirection="column" flexWrap="wrap">
        {breeds?.map((breed) => (
          <NextLink href="/cat-search/[id]" as={`/cat-search/${breed.id}`} key={breed.id}>
            <Button mt={6}>{breed?.name}</Button>
          </NextLink>
        ))}
      </Flex>
    </>
  )
}

export default Breeds;