import { Container, Flex, Heading } from "@chakra-ui/layout"
import React, { FC, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Button } from "@chakra-ui/button"
import NextLink from "next/link"
import { NavBar } from "../../components/Navbar"
import { CAT_API, API_HEADERS } from "../../constants/index"
import axios from "axios"

const Breeds: FC = () => {
  const [breeds, setBreeds] = useState<any>()
  useEffect(() => {
    axios.get(`${CAT_API}breeds`, {
      headers: API_HEADERS
    })
    .then((res) => setBreeds(res.data))
    .catch((err) => {})
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