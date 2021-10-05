import { Container, Heading, Image, Flex, Text, IconButton } from "@chakra-ui/react"
import React, { FC, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { NavBar } from "../../components/Navbar"
import { StarIcon } from "@chakra-ui/icons"
import axios from "axios"
import { CAT_API, API_HEADERS } from "../../constants/index"

export interface CatProps {
 name: string;
 id: string;
 url: string
}
interface CatDescriptionProps {
  breeds : [{
    description: string
  }];
  categories: [{
    name: string
  }]
}
const CatSearch: FC = () => {
  const router = useRouter()
  const [catImages, setCatImages] = useState<CatProps[]>()
  const [catDescription, setCatDescription] = useState("")
  const routerCheck = typeof router.query.id === "string" ? parseInt(router.query.id) : -1
  const [favouriteCats, setFavouriteCats] = useState([""])

  useEffect(() => {
    if(localStorage.getItem("favouriteCats") !== null){
      setFavouriteCats(JSON.parse(localStorage.getItem("favouriteCats")))
    }
    axios.get(
      `${CAT_API}images/search?${!routerCheck? "breed_ids" : "category_ids"}=${router?.query?.id}`, {
        headers: API_HEADERS
      }
    )
    .then((res) => {
      setCatImages(res?.data)
      {!routerCheck ? setCatDescription((res?.data[0] as CatDescriptionProps)?.breeds[0]?.description) :
        setCatDescription((res?.data[0] as CatDescriptionProps)?.categories[0]?.name)}
    })
    .catch((err) => {})
  }, [])
  
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
            <>
              <Image key={catImage?.id} src={catImage?.url}/>
              <IconButton
                icon={<StarIcon />}
                aria-label="favourite image"
                onClick={() => {
                  setFavouriteCats([...favouriteCats, catImage?.url])
                  localStorage.setItem("favouriteCats", JSON.stringify(favouriteCats));
                }}
              />
            </>
          ))}
        </Flex>
      </Container>
    </>
  )
}

export default CatSearch