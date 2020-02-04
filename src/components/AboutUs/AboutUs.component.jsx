import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "react-bootstrap"
import styles from "./AboutUs.module.scss"

const getImage = graphql`
  query {
    aboutUsImage: file(relativePath: { eq: "aboutUs.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AboutUs = () => {
  const data = useStaticQuery(getImage)
  return (
    <main className={styles.AboutUsContainer}>
      <Container>
        <div className={styles.imageContainer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            elementum, sapien vel convallis consequat, dui lorem mollis justo,
            sed consequat lectus lacus vel erat. Donec at mi in enim accumsan
            commodo. Curabitur molestie congue nisi eget imperdiet. Nulla
            rhoncus sem sed libero euismod, sed efficitur massa tempus. In
            sodales non nunc at consectetur. Curabitur et mattis tortor.
          </p>
          <Img fluid={data.aboutUsImage.childImageSharp.fluid} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            elementum, sapien vel convallis consequat, dui lorem mollis justo,
            sed consequat lectus lacus vel erat. Donec at mi in enim accumsan
            commodo. Curabitur molestie congue nisi eget imperdiet. Nulla
            rhoncus sem sed libero euismod, sed efficitur massa tempus. In
            sodales non nunc at consectetur. Curabitur et mattis tortor.
          </p>
        </div>
      </Container>
    </main>
  )
}

export default AboutUs
