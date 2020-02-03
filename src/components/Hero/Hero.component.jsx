import React from "react"
import styles from "./Hero.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Button from "../Button/Button.component"
import BackgroundImage from "gatsby-background-image"

const getImage = graphql`
  query query {
    background: file(relativePath: { eq: "heroBackground.jpg" }) {
      childImageSharp {
        fluid(quality: 75) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    background: {
      childImageSharp: { fluid: backgroundImage },
    },
  } = useStaticQuery(getImage)
  return (
    <BackgroundImage fluid={backgroundImage} className={styles.heroContainer}>
      <div className={styles.centerText}>
        <h1 className={styles.textHeader}>
          Izdelava lesenih <span>umetnin</span>
        </h1>
        <div className={styles.buttonContainer}>
          <Button to="/izdelki">Izdelki</Button>
          <Button to="/kontakt" reverse>
            Kontakt
          </Button>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Hero
