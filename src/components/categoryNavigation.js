import React from "react"
import {Link} from "gatsby"
import slugify from "slugify"

export default ({ city, categories }) => {
  const Categories = categories.map(category => {
    const categorySlug = slugify(category, { lower: true })
    return ( 
    <Link key={category} to={city + "/" + categorySlug}>
      {category}
    </Link>)
  })

  return (
    <nav className="navigation"> 
      <legend>Kategorie:</legend>
      <Link to={city}>Wszystkie</Link>
      {/* ma linkować do danego miasta
      jezeli krakow, to ma linkowac do /krakow
      
      */}
      {Categories}
    </nav>
  )
}
