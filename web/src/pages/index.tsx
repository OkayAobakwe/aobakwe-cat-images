import {
  Link,
  Text,
  Flex
} from '@chakra-ui/react'
import NextLink from "next/link"
import { Container } from '../components/Container'
import { NavBar } from "../components/Navbar"
import React from 'react'

const Index = () => (
  <>
    <NavBar />
    <Container height="100vh">
      <Flex justifyContent="center" m="auto">
        <NextLink href="/breeds/" as="/breeds/">
          <Link marginRight={8}>
            <Text fontSize="3xl">Breeds</Text>
          </Link>
        </NextLink>
        <NextLink href="/categories/" as="/categories/">
          <Link>
            <Text fontSize="3xl">Categories</Text>
          </Link>
        </NextLink>
      </Flex>
    </Container>
  </>
)

export default Index
