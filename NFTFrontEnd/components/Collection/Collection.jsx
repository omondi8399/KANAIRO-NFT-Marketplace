import React, { useState, useEffect } from 'react'
import { 
    BsFillAlarmFill,
    BsFillCalenderDateFill,
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
    const newsArray = [1,2,3]
  return (
    <div>
      
    </div>
  )
}

export default Collection
