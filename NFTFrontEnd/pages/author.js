import React, { useState, useEffect} from 'react'


//INTERNAL IMPORT
import Style from "./styles/author.module.css"
import { Banner, NFTCardTwo } from "../collectionPage/collectionIndex"
import { Brand, Title } from "../components/componentsIndex"
import images from "../img"
// import { AuthorProfileCard, AuthorTaps}


const author = () => {
        const popularArray = [
          images.user1,
          images.user2,
          images.user3,
          images.user4,
          images.user5,
          images.user6,
          images.user7,
          images.user8
        ]
  return (
    <div>
      
    </div>
  )
}

const [collectiables, setCollectiables] = useState(true)
const [created, setcreated] = useState(false)
const [like, setLike] = useState(false)


export default author
