const path = require("path")

//creating all items
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query itemPages {
      allContentfulIzdelki {
        edges {
          node {
            slugIzdelka
            podzavihek
          }
        }
      }
    }
  `)
  data.allContentfulIzdelki.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.podzavihek.replace(/\s+/g, "-").toLowerCase()}/${
        node.slugIzdelka
      }`,
      component: path.resolve("./src/pages/itemTemplate.js"),
      context: {
        slug: node.slugIzdelka,
        podzavihek: node.podzavihek,
      },
    })
  })
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
    console.log(String(type))
    createPage({
      path: `/${type.replace(/\s+/g, "-").toLowerCase()}`,
      component: path.resolve("./src/pages/izdelkiTemplate.js"),
      context: {
        slug: type,
      },
    })
  })
}
