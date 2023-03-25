import React, {useState, useEffect} from 'react'
import Image from "next/image"
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai"
import {TbPlayer, TbPlayerPause} from "react-icons/tb"

//INTERNAL IMPORT
import Style from "./AudioCard.module.css"
import images from "../../../img"

const AudioCard = () => {
  const [like, setLike] = useState(false)
  const [play, setPlay] = useState(false)

  return (
    <div className={Style.audioCard}>
      <div className={Style.audioCard_box}>
        <div className={Style.audioCard_box_like_time}>
          <div className={Style.audioCard_box_like} onClick={() => likeNFt()}></div>
        </div>
      </div>
    </div>
  )
}

export default AudioCard
