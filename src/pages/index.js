import React from "react"
import Layout from "../components/Layout/Layout.component"
import Hero from "../components/Hero/Hero.component"
import About from "../components/About/About.component"
import Services from "../components/Services/Services.component"
import MostSold from "../components/MostSold/MostSold.component"
import { graphql } from "gatsby"
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
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
          prejsnjaCena
          slugIzdelka
          contentful_id
          slikaIzdelka {
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
