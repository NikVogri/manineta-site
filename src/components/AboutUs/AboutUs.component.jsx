import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "react-bootstrap"
import styles from "./AboutUs.module.scss"

const getImages = graphql`
  query {
    aboutUsImage: file(relativePath: { eq: "izdelava-izdelka1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutUsImage2: file(relativePath: { eq: "zaslon.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutUsImage3: file(relativePath: { eq: "stroj.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AboutUs = () => {
  const data = useStaticQuery(getImages)
  return (
    <div className={styles.AboutUsContainer}>
      <Container>
        <div className={styles.textContainer}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            elementum, sapien vel convallis consequat, dui lorem mollis justo,
            sed consequat lectus lacus vel erat. Donec at mi in enim accumsan
            commodo. Curabitur molestie congue nisi eget imperdiet. Nulla
            rhoncus sem sed libero euismod, sed efficitur massa tempus. In
            sodales non nunc at consectetur. Curabitur et mattis tortor.
          </p>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.singleImageContainer}>
            <Img fluid={data.aboutUsImage2.childImageSharp.fluid} />
          </div>
          <div className={styles.singleImageContainer}>
            <Img fluid={data.aboutUsImage.childImageSharp.fluid} />
          </div>
          <div className={styles.singleImageContainer}>
            <Img fluid={data.aboutUsImage3.childImageSharp.fluid} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default AboutUs
