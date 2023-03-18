import React, { useState, useEffect} from 'react'
import Image from "next/image"
import Link from "next/link"

//--------IMPORT ICON
import { MdNotifications } from 'react-icons/md'
import { BsSearch } from "react-icons/bs"
import { CgMenuLeft, CgMenuRight } from "react-icons/cg"

//INTERNAL IMPORT
import Style from "./NavBar.module.css"
import { Discover, HelpCenter, Notification, Profile, Sidebar } from "./index"
import { Button } from "../componentsIndex"
import images from "../../img"

const Navbar = () => {
    //-----USESTATE COMPONENTS
    const [discover, setDiscover] = useState(false)
    const [help, setHelp] = useState(false)
    const [notification, setNotification] = useState(false)
    const [profile, setProfile] = useState(false)
    const [openSideMenu, setOpenSideMenu] = useState(false)
  return (
    <div className={Styles.navbar}>
        <div className={Styles.navbar_container}>
            <div className={Styles.navbar_container_left}>
                <div className={Styles.logo}>
                    <Image src={images.logo} alt="NFT MARKET PLACE" width={100} height={100} />
                </div>
                <div className={Styles.navbar_container_left_box_input}>
                    <div className={Styles.navbar_container_left_box_input_box}></div>
                </div>
            </div>
            <div className={Styles.navbar_container_right}>

            </div>
        </div>
    </div>
  )
}

export default Navbar