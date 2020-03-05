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
    <Container>
      <div className={styles.AboutUsContainer}>
        <div className={styles.textContainer}>
          <p>
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
      </div>
    </Container>
  )
}

export default AboutUs
