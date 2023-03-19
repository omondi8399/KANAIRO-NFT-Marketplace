import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GrClose } from "react-icons/gr"
import { 
  TiSocialFacebook, 
  TiSocialLinkedin, 
  TiSocialTwitter, 
  TiSocialYoutube, 
  TiSocialInstagram, 
  TiArrowSortedDown, 
  TiArrowSortedUp 
      } from "react-icons/ti"


// INTERNAL IMPORT 
import Style from "./Sidebar.module.css"
import images from "../../../img"
import Button from "../../Button/Button"

const Sidebar = ({ setOpenSideMenu }) => {
  //-------USESTATE
  const [openDiscover,setOpenDiscover] = useState(false)
  const [openHelp, setOpenHelp] = useState(false)

 //----------DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Author Profile",
      link: "author-profile"
    },
    {
      name: "NFT Details",
      link: "NFT-details"
    },
    {
      name: "Account Setting",
      link: "account-setting"
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet"
    },
    {
      name: "Blog",
      link: "blog"
    }
    
  ]

  //---------HELP CENTER
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ]

  const openDiscoverMenu = ()=> {
    if(!openDiscover) {
      setOpenDiscover(true)
    } else {
      setOpenDiscover(false)
    }
  }

  const openHelpMenu = () => {
    
  }

  return (
    <div className={Style.sidebar}>
      <GrClose className={Style.sidebar_closeBtn} onClick={()=> closeSidebar()} />

      <div className={Style.sidebar_box}>
        <Image src={images.logo} alt="logo" width={150} height={150} />
        <p>Discover the Most OutStanding articles on all pieces of NFT & your own stories and share them</p>
        <div className={Style.sidebar_social}>
          <a href='#'>
            <TiSocialFacebook />
          </a>
          <a href='#'>
            <TiSocialLinkedin />
          </a>
          <a href='#'>
            <TiSocialTwitter />
          </a>
          <a href='#'>
            <TiSocialInstagram />
          </a>
        </div>
      </div>

      <div className={Style.sidebar_menu}>
        <div>
          <div className={Style.sidebar_menu_box} onClick={()=> openDiscoverMenu()}>
            <p>Discover</p>
            <TiArrowSortedDown/>
          </div>

          {
            openDiscover && (
              <div className={Style.sidebar_discover}>
                {discover.map((el, i) => (
                  <p key={i + 1}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>
        <div>
          <div className={Style.sidebar_menu_box} onClick={() => openHelpMenu()}>

            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>

          {
            openHelp && (
              <div className={Style.sidebar_discover}>
                {helpCenter.map((el, i)=> (
                  <p key={i + 1}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )

          }
        </div>
      </div>

      <div className={Style.sidebar_button}>
        <Button btnName="Create" />
        <Button btnName="Connect Wallet" />
      </div>
    </div>
  )
}

export default Sidebar