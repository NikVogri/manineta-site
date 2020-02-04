import React from "react"
import styles from "./ItemCard.module.scss"
import Img from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"
import Button from "../Button/Button.component"
const tempImage = graphql`
  query {
    showcase: file(relativePath: { eq: "showcase.jpg" }) {
      childImageSharp {
        fixed(width: 180, height: 210) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const ItemCard = () => {
  const {
    showcase: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(tempImage)
  return (
    <div className={styles.card}>
      <div className={styles.overlay}>
        <Link to="/izdelek">Podrobnosti</Link>
      </div>
      <div className={styles.imageContainer}>
        <Img fixed={fixed} />
      </div>
      <span className={styles.title}>Hišica v gozdu</span>
      <div className={styles.priceContainer}>
        <span className={styles.price}>15.00€</span>
        <span className={styles.prevPrice}>25.00€</span>
      </div>
    </div>
  )
}

export default ItemCard
