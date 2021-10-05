import React, { useEffect, useState } from "react"
import { NavBar } from "../../components/Navbar"
import { Image } from "@chakra-ui/react"

const Favourites = () => {
  const [favouriteCats, setFavouriteCats] = useState([])
  useEffect(() => {
    setFavouriteCats(JSON.parse(localStorage.getItem("favouriteCats")))
  })
  console.log(favouriteCats)
  return(
    <>
      <NavBar />
      {favouriteCats?.map((cat) => (
        <Image src={cat} key={cat} marginBottom={4}/>
      ))}
    </>
  )
}

export default Favourites