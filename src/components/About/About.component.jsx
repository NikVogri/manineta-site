import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"
import styles from "./About.module.scss"
import Img from "gatsby-image"
import Title from "../Title/Title.component"
const getImage = graphql`
  query {
    showcase: file(relativePath: { eq: "showcase.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const About = () => {
  const {
    showcase: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(getImage)
  return (
    <section className={styles.about}>
      <Container>
        <Title title="O" subtitle="nas" />
        <Row>
          <Col sm={12} md={6}>
            <div className={styles.background}>
              <div className={styles.imageContainer}>
                <Img fluid={fluid} />
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} className={styles.opis}>
            <h5>Opis</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, suscipit! Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Corrupti, suscipit!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corrupti, suscipit!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
