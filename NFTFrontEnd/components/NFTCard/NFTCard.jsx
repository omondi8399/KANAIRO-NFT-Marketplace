import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { BsIMages } from "react-icons/bs"
import Image from "next/image"

//INTERNAL IMPORT
import Style from "./NFTCard.module.css"
import images from "../../img"

const NFTCard = () => {
    const featureArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const [like, setLike] = useState(true)
  return (
    <div className={Style.NFTCard}>
        {featureArray.map((el, i)=>(
            <div className={Style.NFTCard}
        ))}
    </div>
  )
}

export default NFTCard
