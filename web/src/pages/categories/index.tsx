import { Container, Flex, Heading } from "@chakra-ui/layout"
import React, { FC, useEffect, useState } from "react"
import { Button } from "@chakra-ui/button"
import NextLink from "next/link"
import { NavBar } from "../../components/Navbar"
import axios from "axios"
import { CAT_API, API_HEADERS } from "../../constants/index"
import { CatProps } from "../cat-search/[id]"

const Categories: FC = () => {
  const [categories, setCategories] = useState<CatProps[]>()
  useEffect(() => {
    axios.get(`${CAT_API}/categories`, {
      headers: API_HEADERS
    })
    .then(res => setCategories(res.data))
    .catch((err) => {})
  }, [])
 
  return(
    <>
      <NavBar />
      <Container centerContent>
        <Heading>Categories</Heading>
      </Container>
      <Flex flexDirection="column" flexWrap="wrap">
        {categories?.map((category) => (
          <NextLink href="/cat-search/[id]" as={`/cat-search/${category.id}`} key={category.id}>
            <Button mt={6}>{category?.name}</Button>
          </NextLink>
        ))}
      </Flex>
    </>
  )
}

export default Categories;