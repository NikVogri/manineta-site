import React from "react"
import Layout from "../components/Layout/Layout.component"
import Hero from "../components/Hero/Hero.component"
import About from "../components/About/About.component"
import Services from "../components/Services/Services.component"
import CategoryContainer from "../components/CategoryContainer/CategoryContainer.component"
import MostSold from "../components/MostSold/MostSold.component"
import ShowcaseCard from "../components/ShowcaseCard/ShowcaseCard.component"
import { graphql } from "gatsby"
import SEO from "../components/SEO/SEO"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Prva"
        description="Manineta Creating je podjetje v okrožju Ljubljane. Ukvarjamo se z izdelavo lesenih gravur."
      />
      <Hero />
      <ShowcaseCard
        title="Narava"
        subtitle="Izdelki, ki predstavljajo naravo v vašem domu"
        backgroundColor="#FFB3r4B"
      />
      <ShowcaseCard
        reverse
        title="Okraski"
        subtitle="Za vas ali vaše najljubše"
      />
      <CategoryContainer />
      {/* <About /> */}
      {/* <Services /> */}
      <MostSold items={data.allContentfulIzdelki.edges.slice(0, 3)} />
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
            fixed {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
export default IndexPage
