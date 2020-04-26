import React from "react"
import {Link} from "gatsby"
import slugify from "slugify"

export default ({ cities }) => {
  const Cities = cities.map(city => {
    const citySlug = slugify(city, { lower: true })
    return ( 
    <Link key={city} to={"/" + citySlug} partiallyActive={true} activeClassName="active">
      {city}
    </Link>)
  })

  return (
    <nav className="navigation">
      <legend className="mb-5"><b>Miasta:</b></legend>
      <Link to="/" activeClassName="active">Wszystkie</Link>
      {Cities}
    </nav>
  )
}
