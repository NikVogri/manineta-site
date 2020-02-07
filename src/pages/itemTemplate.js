import React from "react"
import Layout from "../components/Layout/Layout.component"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"
import ItemInfo from "../components/ItemInfo/ItemInfo.component"

const itemTemplate = ({ data }) => {
  const itemData = data.allContentfulIzdelki.edges[0].node
  console.log(itemData)
  return (
    <Layout>
      <Container>
        <ItemInfo data={itemData} />
      </Container>
    </Layout>
  )
}

export const getTempData = graphql`
  query {
    allContentfulIzdelki(
      filter: { slugIzdelka: { eq: "hisa-z-vsemi-dodatki" } }
    ) {
      edges {
        node {
          imeIzdelka
          cenaIzdelka
          prejsnjaCena
          slugIzdelka
          materijalIzdelka
          contentful_id
          zalogaIzdelka
          velikostIzdelka
          opisIzdelka {
            internal {
              content
            }
          }
          slikeIzdelka {
            fluid(quality: 70, maxHeight: 320) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
export default itemTemplate
