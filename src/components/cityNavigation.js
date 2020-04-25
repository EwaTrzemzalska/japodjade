import React from "react"
import {Link} from "gatsby"
import slugify from "slugify"

export default ({ cities }) => {
  const Cities = cities.map(city => {
    const citySlug = slugify(city, { lower: true })
    return ( 
    <Link key={city} to={"/" + citySlug}>
      {city}
    </Link>)
  })

  return (
    <nav className="navigation"> 
      <Link to="/">Wszystkie</Link>
      {Cities}
    </nav>
  )
}
