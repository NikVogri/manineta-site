import React from "react"
import Layout from "../components/Layout/Layout.component"
import ItemsContainer from "../components/ItemsContainer/ItemsContainer.component"

const Izdelki = ({ data }) => {
  return (
    <Layout>
      <ItemsContainer items={data.allContentfulIzdelki.edges} />
    </Layout>
  )
}
export const query = graphql`
  query categoryPages($slug: String!) {
    allContentfulIzdelki(filter: { podzavihek: { eq: $slug } }) {
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

export default Izdelki
