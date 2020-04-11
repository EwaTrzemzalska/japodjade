const path = require(`path`)

const escapeDiacritics = (s) => {
  return s.replace(/ą/g, 'a').replace(/Ą/g, 'A')
    .replace(/ć/g, 'c').replace(/Ć/g, 'C')
    .replace(/ę/g, 'e').replace(/Ę/g, 'E')
    .replace(/ł/g, 'l').replace(/Ł/g, 'L')
    .replace(/ń/g, 'n').replace(/Ń/g, 'N')
    .replace(/ó/g, 'o').replace(/Ó/g, 'O')
    .replace(/ś/g, 's').replace(/Ś/g, 'S')
    .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
    .replace(/ź/g, 'z').replace(/Ź/g, 'Z');
}

exports.createPages = async ({ actions, graphql, reporter }) => {

  const { createPage } = actions

  const template = path.resolve(`src/pages/index.js`)

  const result = await graphql(`
    {
      allAirtable {
        distinct(field: data___Miasto)
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allAirtable.distinct.forEach((city) => {
    console.log("Generating page for " + city)
    createPage({
      path: "/" + escapeDiacritics(city.toLowerCase()),
      component: template,
      context: { city },
    })
  }
  )
}