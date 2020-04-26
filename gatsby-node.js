const path = require(`path`)
const slugify = require('slugify')

exports.createPages = async ({ actions, graphql, reporter }) => {

  const { createPage } = actions

  const cityTemplate = path.resolve(`src/templates/cityTemplate.js`)

  const result = await graphql(`
    {
      cities: allAirtable {
        distinct(field: data___MiastoTrimmed)
      }
      categories: allAirtable(filter: {data: {Published: {eq: true}}}) {
        distinct(field: data___Kategoria)
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // generate main page
  createPage({
    path: "/",
    component: cityTemplate,
    context: {},
  })

  console.log(result.data.cities.distinct)

  result.data.cities.distinct.forEach((city) => {
    const citySlug = slugify(city, { lower: true })
    console.log("Generating page for " + citySlug)
    createPage({
      path: "/" + citySlug,
      component: cityTemplate,
      context: { city },
    })

    const categories = result.data.categories.distinct
    categories.forEach((category) => {
      const categorySlug = slugify(category, { lower: true })
      console.log("Generating page for " + citySlug + " " + categorySlug)
      createPage({
        path: "/" + citySlug + "/" + categorySlug,
        component: cityTemplate,
        context: { city, category },
      })
    })
  })
}