import React from "react"
import Layout from "../components/Layout/Layout.component"
import Hero from "../components/Hero/Hero.component"
import About from "../components/About/About.component"
import Services from "../components/Services/Services.component"
import CategoryContainer from "../components/CategoryContainer/CategoryContainer.component"
import MostSold from "../components/MostSold/MostSold.component"
import { graphql } from "gatsby"
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <Services />
      <About />
      <CategoryContainer />
      <MostSold items={data.allContentfulIzdelki.edges.slice(0, 4)} />
    </Layout>
  )
}
export const getPopularItems = graphql`
  query {
    allContentfulIzdelki(filter: { prikazNaSprednjiStrani: { eq: true } }) {
      edges {
        node {
          imeIzdelka
          cenaIzdelka
          podzavihek
          prejsnjaCena
          slugIzdelka
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
export default IndexPage
