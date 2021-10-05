import { Box, Flex, Link, Heading} from '@chakra-ui/react';
import React, { FC} from 'react'
import NextLink from "next/link";


export const NavBar: FC = ({}) => {
  return (
    <Flex bg="tomato" p={4} top={0} position="sticky" zIndex={1}>
      <Flex  align="center" maxWidth={800} m="auto">
        <NextLink href="/">
          <Link>
            <Heading>Cats</Heading>
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
}