import React from "react"
import Layout from "../components/Layout/Layout.component"
import { Container } from "react-bootstrap"
import { graphql } from "gatsby"
import ItemInfo from "../components/ItemInfo/ItemInfo.component"
import SimilarContent from "../components/SimilarContent/SimilarContent.component"
import SEO from "../components/SEO/SEO"
const itemTemplate = ({ data }) => {
  let similarItems
  if (data) {
    similarItems = data.allContentfulIzdelki.edges.filter(
      item => item.izdelek.imeIzdelka !== data.contentfulIzdelki.imeIzdelka
    )
  }

  return (
    <Layout darkNav>
      <SEO
        title={data.contentfulIzdelki.imeIzdelka}
        description={`${data.contentfulIzdelki.opisIzdelka}`}
      />
      <Container>
        <ItemInfo data={data.contentfulIzdelki} />
        <h4 style={{ margin: "2rem 0 1rem 0" }}>Podobno</h4>
        <SimilarContent data={similarItems} />
      </Container>
    </Layout>
  )
}
export const getTempData = graphql`
  query itemPages($slug: String, $podzavihek: String) {
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
        fluid(quality: 90) {
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
