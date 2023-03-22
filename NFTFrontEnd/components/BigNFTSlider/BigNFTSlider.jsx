import React, {useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { MdVerified, MdTimer } from "react-icons/md"
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb"


//INTERNAL IMPORT 
import Style from "./BigNFTSlider.module.css"
import images from "../../img"
import Button from "../Button/Button"

const BigNFTSlider = () => {
    const [idNumber, setIdNumber] = useState(1)

    const sliderData = [
        {
            title: "Flash NFT",
            id: 1,
            name: "Rodgers Omondi",
            collection: "FlashCw",
            price: " 00000967 ETH",
            like: 542,
            image: images.user1,
            nftImage: images.nft_image_1,
            time: {
                days: 7,
                hours: 4,
                minutes: 21,
                seconds: 35,
            },
        },
        {
            title: "KidFlash NFT",
            id: 2,
            name: "Wally West",
            collection: "Legends",
            price: " 000003332 ETH",
            like: 293,
            image: images.user2,
            nftImage: images.nft_image_2,
            time: {
                days: 14,
                hours: 8,
                minutes: 14,
                seconds: 58,
            },
        },
        {
            title: "BlackFlash NFT",
            id: 3,
            name: "Jay Garrick",
            collection: "Zoom",
            price: " 000003882 ETH",
            like: 604,
            image: images.user3,
            nftImage: images.nft_image_3,
            time: {
                days: 14,
                hours: 13,
                minutes: 12,
                seconds: 15,
            },
        },
        {
            title: "Savitar NFT",
            id: 4,
            name: "Barry Allan",
            collection: "Speedforce",
            price: " 0000093967 ETH",
            like: 846,
            image: images.user4,
            nftImage: images.nft_image_4,
            time: {
                days: 3,
                hours: 13,
                minutes: 06,
                seconds: 55,
            },
        }
    ]
  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
            <h2>{sliderData[idNumber].title}</h2>
            <div className={Style.bigNFTSlider_box_left_creator}>
                <div className={Style.bigNFTSlider_box_left_creator_profile}>
                    <Image className={Style.bigNFTSlider_box_left_creator_profile_img} 
                    src={sliderData[idNumber].image} 
                    alt="profile image" 
                    width={50} 
                    height={50} 
                    />
                <div className={Style.bigNFTSlider_box_left_creator_profile_img}>
                    <p>Creator</p>
                    <h4>{sliderData[idNumber].name} 
                    <span>
                        <MdVerified />
                    </span>
                    </h4>
                </div>
                </div>
                <div className={Style.bigNFTSlider_box_left_creator_collection}>
                    <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon} />

                    <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                        <p>Collection</p>
                        <h4>{sliderData[idNumber].collection}</h4>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BigNFTSlider
