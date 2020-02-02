import React from "react"
import { Row, Col } from "react-bootstrap"
import styles from "./Hero.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Button from "../Button/Button.component"
import BackgroundImage from "gatsby-background-image"

const getImages = graphql`
  query {
    allImageSharp {
      edges {
        node {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
const Hero = () => {
  const {
    allImageSharp: { edges },
  } = useStaticQuery(getImages)
  const [logoBig, sideImage] = edges
  return (
    <div className={styles.hero}>
      <Row className={styles.heroRow}>
        <Col style={{ padding: "0" }} className={styles.leftSide} md={6}>
          <div className={styles.logoImageContainer}>
            <Img fluid={logoBig.node.fluid} />
            <h1>
              IZDELAVA LESENIH <span>UMETNIN</span>
            </h1>
            <Button>Izdelki</Button>
          </div>
        </Col>
        <Col
          style={{ padding: "0" }}
          className={`${styles.rightSide} d-none d-md-block`}
          md={6}
        >
          <BackgroundImage
            fluid={sideImage.node.fluid}
            className={styles.bigImageContainer}
          />
        </Col>
      </Row>
    </div>
  )
}

export default Hero
