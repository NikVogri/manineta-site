import React from "react"
import Layout from "../components/Layout/Layout.component"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"
import ItemInfo from "../components/ItemInfo/ItemInfo.component"
import SimilarContent from "../components/SimilarContent/SimilarContent.component"
const itemTemplate = ({ data }) => {
  return (
    <Layout>
      <Container>
        <ItemInfo data={data.contentfulIzdelki} />
        <SimilarContent data={data.allContentfulIzdelki} />
      </Container>
    </Layout>
  )
}
export const getTempData = graphql`
  query itemPages($slug: String!, $podzavihek: String!) {
    contentfulIzdelki(slugIzdelka: { eq: $slug }) {
      imeIzdelka
      cenaIzdelka
      prejsnjaCena
      slugIzdelka
      materijalIzdelka
      contentful_id
      zalogaIzdelka
      podzavihek
      velikostIzdelka
      opisIzdelka {
        internal {
          content
        }
      }
      slikeIzdelka {
        fluid(quality: 70, maxHeight: 350) {
          ...GatsbyContentfulFluid
        }
      }
    }
    allContentfulIzdelki(filter: { podzavihek: { eq: $podzavihek } }) {
      edges {
        izdelek: node {
          imeIzdelka
          cenaIzdelka
          prejsnjaCena
          slugIzdelka
          podzavihek
          contentful_id
          slikeIzdelka {
            fixed(width: 180, height: 210) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
export default itemTemplate
