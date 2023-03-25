import React, { useState } from 'react'
import Image from 'next/image'
import { MdVerified } from 'react-icons/md'
import { TiTick } from "react-icons/ti"


//INTERNAL IMPORT
import Style from "./FollowerTabCard.module.css"
import images from "../../../img"
const FollowerTabCard = ({i, el}) => {
  const [following, setFollowing] = useState(false)
  const followMe = () => {
    if (!followMe) {
        setFollowing(true)
    } else {
      setFollowing(false)
    }
  }

  return (
    <div className={Style.FollowerTabCard}>
      <div className={Style.FollowerTab_rank}>
        <p>
          #{i + 1} <span>🥇</span>
        </p>
      </div>

      <div className={Style.FollowerTabCard_box}>
        <div className={Style.FollowerTabCard_box_img}>
          <Image 
          className={Style.FollowerTabCard_box_img_img}
          src={images.creatorbackground1} 
          alt="profile background"
          width={500}
          height={300}
          objectFit="cover"
          />
        </div>

        <div className={Style.FollowerTabCard_box_profile}>
          <Image 
          className={Style.FollowerTabCard_box_profile_img} 
          alt="profile picture" 
          width={50} height={50}
          src={images.user1}
          />
        </div>

        <div className={Style.FollowerTabCard_box_info}>
          <div className={Style.FollowerTabCard_box_info_name}>
            <h4>Henry Kash {""} {""} <span><MdVerified /></span> </h4>
            <p>12.321 ETH</p>
          </div>

          <div className={Style.FollowerTabCard_box_info_following}>
            {following ? (
              <a onClick={() => followMe()}>
                Follow{""} {""}
                <span>
                  <TiTick />
                </span>
              </a>
            ) : (
              <a onClick={() => followMe()}>Following</a>
            )

            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default FollowerTabCard
