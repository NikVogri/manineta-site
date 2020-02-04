import React from "react"
import Layout from "../components/Layout/Layout.component"
import Hero from "../components/Hero/Hero.component"
import { graphql } from "gatsby"
import ContactCards from "../components/ContactCards/ContactCards.component"
// import ContactForm from '../components/ContactForm/ContactForm.component'
const Onas = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Hero small image={data.headerImage.childImageSharp.fluid}>
        <div className="hero-overlay">
          <h1 className="hero-header">Kontakt</h1>
        </div>
      </Hero>
      <ContactCards />
      {/* <ContactForm /> */}
    </Layout>
  )
}

export const headerImage = graphql`
  query {
    headerImage: file(relativePath: { eq: "header_image2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Onas
