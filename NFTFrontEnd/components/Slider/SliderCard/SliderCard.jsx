import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

//INTERNAL IMPORT 
import Style from "./SliderCard.module.css"
import images from "../../../img"
import LikeProfile from "../../LikeProfile/LikeProfile"
const SliderCard = () => {
  return (
    <motion.div className={Style.SliderCard}>
      <div className={Style.SliderCard}>
        <motion.div className={Style.slider}>
            <Image src={images.creatorbackground1}
            className={Style.SliderCard_box_img_img}
            alt="slider profile"
            width={500}
            height={300}
            objectFit="cover"/>
        </motion.div>
        <div className={Style.SliderCard_box_title}>
          <p>NFT Video #12345</p>
          <div className={Style.SliderCard_box_title_like}>
            <LikeProfile/>
            <small>1 of 100</small>
          </div>
        </div>

        <div className={Style.SliderCard_box__price}>
          <div className={Style.SliderCard_box__price_box}>
            <small>Current Bid</small>
            <p>1.000ETH</p>
          </div>
          <div className={Style.SliderCard_box__price_time}>
            <small>Remaining time</small>
            <p>3h : 15m : 20s</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SliderCard
