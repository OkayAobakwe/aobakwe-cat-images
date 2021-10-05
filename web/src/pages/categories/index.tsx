import { Container, Flex, Heading } from "@chakra-ui/layout"
import React, { FC, useEffect, useState } from "react"
import { Button } from "@chakra-ui/button"
import NextLink from "next/link"

const Categories: FC = () => {
  const [categories, setCategories] = useState<any>()
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/categories", {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "90316368-18c6-4271-aeaf-ef3b88cb5f03"
      }
    })
    .then(data => data.json())
    .then(data => setCategories(data))
  }, [])
 
  return(
    <>
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