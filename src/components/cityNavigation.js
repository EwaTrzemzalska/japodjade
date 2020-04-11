import React from "react"
import {Link} from "gatsby"
import stringUtils from "../utils/string.js"

export default ({ cities }) => {
  console.log(cities)
  const Cities = cities.map(city => {
    return <Link key={city} to={"/" + stringUtils.escapeDiacritics(city.toLowerCase())}>{city}</Link>
  })

  return (
    <nav className="navigation"> 
      {Cities}
    </nav>
  )
}