import { Container, Heading, Image, Flex, Text } from "@chakra-ui/react"
import React, { FC, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { NavBar } from "../../components/Navbar"

const CatSearch: FC = () => {
  const router = useRouter()
  const [catImages, setCatImages] = useState<any>()
  const [catDescription, setCatDescription] = useState("")
  const routerCheck = typeof router.query.id === "string" ? parseInt(router.query.id) : -1

  useEffect(() => {
    !routerCheck ?
      fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${router?.query?.id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "90316368-18c6-4271-aeaf-ef3b88cb5f03"
        }
      })
      .then(data => data.json())
      .then(data => {
        setCatImages(data)
        setCatDescription(data[0]?.breeds[0]?.description)
      })
    :
      fetch(`https://api.thecatapi.com/v1/images/search?category_ids=${router?.query?.id}`, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "90316368-18c6-4271-aeaf-ef3b88cb5f03"
        }
      })
      .then(data => data.json())
      .then(data => {
        setCatImages(data)
        setCatDescription(data[0]?.categories[0]?.name)
      })
  }, [])
  console.log("data", !!routerCheck)
  return(
    <>
    <NavBar/>
    <Container centerContent>
      {!routerCheck ? (
        <>
          <Heading>{router?.query?.id}</Heading>
          <Text fontSize="md">{catDescription}</Text>
        </>
      )
      : (
        <Heading>{catDescription}</Heading>
      )}
      <Flex flexDirection="column">
        {catImages?.map((catImage) => (
          <Image key={catImage?.id} src={catImage?.url}/>
        ))}
      </Flex>
    </Container>
    </>
  )
}

export default CatSearch