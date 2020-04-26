import React from "react"
import {Link} from "gatsby"
import slugify from "slugify"

export default ({ city, categories }) => {
  const citySlug = slugify(city, { lower: true })
  const Categories = categories.map(category => {
    const categorySlug = slugify(category, { lower: true })
    return (
    <Link key={category} to={"/" + citySlug + "/" + categorySlug} partiallyActive={true} activeClassName="active">
      {category}
    </Link>)
  })

  return (
    <nav className="navigation"> 
      <legend>Kategorie:</legend>
      <Link to={"/" + citySlug } activeClassName="active">Wszystkie</Link>
      {Categories}
    </nav>
  )
}
