import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col, Container } from "react-bootstrap"
import styles from "./About.module.scss"
import Img from "gatsby-image"
import Title from "../Title/Title.component"
import Button from "../Button/Button.component"
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
      <Container className={styles.aboutContainer}>
        <Title title="O" subtitle="nas" />
        <Row>
          <Col sm={12} md={6}>
            <div className={styles.background}>
              <div className={styles.imageContainer}>
                <Img fluid={fluid} />
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} className={styles.description}>
            <h5>MaNiNeTa</h5>
            <p>
              Veselje do ustvarjanja,domišljija ter sprostitev ob tem nas je
              pripeljalo do laserskega graviranja. Graviranje, rezanje ter
              izdelava različnih nekovinskih izdelkov. Izdelki za darila ob
              raznih priložnostih kot so rojstni dnevi, krst, poroke, in še in
              še.
            </p>
            <p style={{ fontWeight: "bold" }}>
              Vse to in še mnogo več Vam ponujamo pri MaNiNeTi
            </p>
            <div className={styles.btnContainer}>
              <Button small to="/o-nas">
                Več
              </Button>
              <Button small to="/kontakt">
                Kontakt
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About

/*<p>
            Veselje do ustvarjanja,domišljija ter sprostitev ob tem nas je
            pripeljalo do laserskega graviranja. Graviranje, rezanje ter
            izdelava različnih nekovinskih izdelkov. Izdelki za darila ob raznih
            priložnostih kot so rojstni dnevi, krst, poroke, in še in še.
          </p>
          <p>
            Mogoče potrebujete kaj za popestritev doma, otroških sobic,....ali
            pa preprosto obožujete leseni nakit,obeske,...
          </p>
          <p style={{ fontWeight: "bold" }}>
            Vse to in še mnogo več Vam ponujamo pri MaNiNeTi
          </p> */
