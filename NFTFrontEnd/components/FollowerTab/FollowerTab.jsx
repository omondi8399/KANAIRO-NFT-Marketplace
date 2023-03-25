import React, { useState, useEffect } from 'react'
import { RiUserFollowFill, RiUserUnfollowFill, RiAwardLine, } from "react-icons/ri"

//INTERNAL IMPORT 
import Style from "./FollowerTab.module.css"

const FollowerTab = () => {
    const CardArray = [1,2,3,4,5,6,7,8]
    const FollowingArray = [1,2,3,4,5,6]
    const NewsArray = [1,2,3,4,5]

    const [popular, setPopular] = useState(true)
    const [following, setFollowing] = useState(false)
    const [news, setNews] = useState(false)
    return (
    <div className={Style.followerTab}>
        <div className={Style.followerTab.title}>
            <h2> Top Creators List</h2>
            <div className={Style.followerTab_tabs}>
                <div className={Style.followerTab_tab_btn}>
                    <button onClick={()=> openPopular()}>
                        <RiUserFollowFill /> Popular
                    </button>
                    <button onClick={()=> openFollower()}>
                        <RiUserFollowFill /> Following
                    </button>
                    <button onClick={()=> openNews()}>
                        <RiAwardLine /> NoteWorthy
                    </button>
                </div>
            </div>
        </div>

        {
            popular && (
                <div className={Style.followerTab_box}>
                    {CardArray.map((el, i)=> (
                        <FollowerTabCard key={i + 1} i={i} el={el} />
                    ))}
                </div>
            )
        }
    </div>
    )
}

export default FollowerTab
