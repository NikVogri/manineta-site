import React from "react"
import Layout from "../components/Layout/Layout.component"
import Hero from "../components/Hero/Hero.component"
import PresentationItemsContainer from "../components/PresentationItemsContainer/PresentationItemsContainer.component"
import ShowcaseCard from "../components/ShowcaseCard/ShowcaseCard.component"
import { graphql } from "gatsby"
import CategoryContainer from "../components/CategoryContainer/CategoryContainer.component"
import SEO from "../components/SEO/SEO"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO
        title="Prva"
        description="Manineta Creating je podjetje v okrožju Ljubljane. Ukvarjamo se z izdelavo lesenih gravur."
      />
      <Hero />
      {/* ENABLE THIS AFTER MOTE ITEMS GET ADDED */}
      {/* <ShowcaseCard
        title="Narava"
        subtitle="Izdelki, ki predstavljajo naravo v vašem domu"
        backgroundColor="#FFB3r4B"
      />
      <ShowcaseCard
        reverse
        title="Okraski"
        subtitle="Za vas ali vaše najljubše"
      /> */}
      <PresentationItemsContainer
        items={data.showcase.edges.slice(0, 3)}
        title="popularno"
      />
      <PresentationItemsContainer
        items={data.recentlyAdded.edges.slice(0, 3)}
        title="novo na zalogi"
      />
      <CategoryContainer />
    </Layout>
  )
}
export const getPopularItems = graphql`
  query {
    showcase: allContentfulIzdelki(
      filter: { prikazNaSprednjiStrani: { eq: true } }
      limit: 3
    ) {
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
    recentlyAdded: allContentfulIzdelki(limit: 3) {
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
