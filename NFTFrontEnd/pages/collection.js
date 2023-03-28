import React from 'react'


//INTERNAL IMPORT 
import Style from "../styles/collection.module.css"
import images from "../img"
import { Banner, CollectionProfile } from '../collectionPage/collectionIndex'
import { Slider, Brand, NFTCard } from "../components/componentsIndex"
import Filter from '../components/componentsIndex'

const collection = () => {

  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,

  ]
  return (
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <NFTCard NFTData={collectionArray} />
      <Filter />
      <Slider />
      <Brand />
    </div>
  )
}

export default collection
