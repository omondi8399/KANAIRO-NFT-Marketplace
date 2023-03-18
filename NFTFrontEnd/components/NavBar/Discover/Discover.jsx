import React from 'react'
import Link from "next/link"

// INTERNAL IMPORT
import Style from "./Discover.module.css"

const Discover = () => {

  //--------DISCOVER NAVIGATION MENU
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
      name: "Author",
      link: "author"
    },
    {
      name: "Collection",
      link: "collection"
    }
  ]
  return (
    <div>Discover</div>
  )
}

export default Discover