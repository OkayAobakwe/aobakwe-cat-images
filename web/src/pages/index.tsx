import {
  Link,
  Text,
  
} from '@chakra-ui/react'
import NextLink from "next/link"
import { Container } from '../components/Container'
import { Search } from "../components/Search"
import { NavBar } from "../components/Navbar"

const Index = () => (
  <>
    <NavBar />
    <Container height="100vh">
      <NextLink href="/breeds/" as="/breeds/">
        <Link>
          <Text>Breeds</Text>
        </Link>
      </NextLink>
      <NextLink href="/categories/" as="/categories/">
        <Link>
          <Text>Categories</Text>
        </Link>
      </NextLink>
      <Search />
    </Container>
  </>
)

export default Index
