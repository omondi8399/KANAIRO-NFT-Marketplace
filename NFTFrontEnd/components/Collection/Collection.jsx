import React, { useState, useEffect } from 'react'
import { 
    BsFillAlarmFill,
    BsFillCalendarDateFill,
    BsCalendar3
 } from "react-icons/bs"
//INTERNAL IMPORT 
import Style from "./Collection.module.css"
import DaysComponent from "./DaysComponents/DaysComponents"

const Collection = () => {
    const [popular, setPopular] = useState(true)
    const [following, setFollowing] = useState(false)
    const [news, setNews] = useState(false)

    const CardArray = [1,2,3,4,5,6,7,8]
    const followingArray = [1,2,3,4]
    const newsArray = [1,2,3,4,5,6]
  return (
    <div className={Style.collection}>
      <div className={Style.collection_title}>
        <h2>Top List Creators</h2>
        <div className={Style.collection_collections}>
            <div className={Style.collection_collections_btn}>
                <button onClick={()=> openPopular()}>
                    <BsFillAlarmFill /> Last 24 hours
                </button>
                <button onClick={()=> openFollower()}>
                    <BsCalendar3 /> Last 7 days
                </button>
                <button onClick={()=> openPopular()}>
                    <BsFillCalendarDateFill /> Last 30 days
                </button>
            </div>
        </div>
      </div>
      {
        popular
      }
    </div>
  )
}

export default Collection
