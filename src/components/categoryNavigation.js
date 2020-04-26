import React from "react"
import {Link} from "gatsby"
import slugify from "slugify"

export default ({ city, categories }) => {
  const citySlug = slugify(city, { lower: true })
  const Categories = categories.map(category => {
    const categorySlug = slugify(category, { lower: true })
    return (
    <Link key={category} to={"/" + citySlug + "/" + categorySlug}>
      {category}
    </Link>)
  })

  return (
    <nav className="navigation"> 
      <legend>Kategorie:</legend>
      <Link to={"/" + citySlug}>Wszystkie</Link>
      {/* ma linkować do danego miasta
      jezeli krakow, to ma linkowac do /krakow
      
      */}
      {Categories}
    </nav>
  )
}