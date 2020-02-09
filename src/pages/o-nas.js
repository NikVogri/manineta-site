import React from "react"
import Layout from "../components/Layout/Layout.component"
import Hero from "../components/Hero/Hero.component"
import AboutUs from "../components/AboutUs/AboutUs.component"
import { graphql } from "gatsby"
const Onas = ({ data }) => {
  return (
    <Layout>
      <Hero small image={data.headerImage.childImageSharp.fluid}>
        <div className="hero-overlay">
          <h1 className="hero-header">
            O <span>nas</span>
          </h1>
        </div>
      </Hero>
      <AboutUs />
    </Layout>
  )
}

export const headerImage = graphql`
  query {
    headerImage: file(relativePath: { eq: "izdelava-izdelka1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Onas
