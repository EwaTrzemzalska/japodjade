const path = require(`path`)
const slugify = require('slugify')

exports.createPages = async ({ actions, graphql, reporter }) => {

  const { createPage } = actions

  const cityTemplate = path.resolve(`src/templates/cityTemplate.js`)

  const result = await graphql(`
    {
      allAirtable {
        distinct(field: data___MiastoTrimmed)
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

  result.data.allAirtable.distinct.forEach((city) => {
    const citySlug = slugify(city, { lower: true })
    console.log("Generating page for " + citySlug)
    createPage({
      path: "/" + citySlug,
      component: cityTemplate,
      context: { city },
    })

    const categories = ["restauracje", "WarzyWa i owoce"]//TODO: fetch from airtable
    // TODO: change spaces in category for pause
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