const path = require("path")
// creating all shop pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTypes = [
    "Igre",
    "Napis imen",
    "Vabila",
    "Otroske ure",
    "Skatle",
    "Tabla za kozarce s posvetilom",
    "Uhani",
    "Verizice",
    "Dekoracija",
    "Dodatki",
    "Podstavek za posodo-kozarce",
    "Ure",
    "Smrekice",
    "Okraski",
    "Svecniki",
    "Voscila",
    "Dekorativni izdelki",
    "Svecke",
    "Hisice",
    "Naprstni sopki",
    "Drzala za prstane",
  ]
  pageTypes.forEach(type => {
    createPage({
      path: `/${type.replace(/\s+/g, "-").toLowerCase()}`,
      component: path.resolve("./src/pages/izdelkiTemplate.js"),
      context: {
        slug: type,
      },
    })
  })
}
// creating all items
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/template/tour-template.component.jsx"),
      context: {
        slug: node.slug,
      },
    })
  })
}
