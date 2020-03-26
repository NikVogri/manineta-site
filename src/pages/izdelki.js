import React from "react"
import Layout from "../components/Layout/Layout.component"
import ItemsContainer from "../components/ItemsContainer/ItemsContainer.component"
import SEO from "../components/SEO/SEO"

export const query = graphql`
  query {
    allContentfulIzdelki {
      edges {
        node {
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

const Izdelki = ({ data }) => {
  return (
    <Layout darkNav>
      <SEO
        title="Izdelki"
        description="Od kaktusov do posode, od jaslic do sveč, vse to in še več v naši ponudbi"
      />
      <ItemsContainer items={data.allContentfulIzdelki.edges} />
    </Layout>
  )
}

export default Izdelki
