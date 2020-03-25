import React from "react"
import styles from "./ShowcaseCard.module.scss"
import Img from "gatsby-image"
import { Container } from "react-bootstrap"
const ShowcaseCard = ({
  image,
  image2,
  title,
  subtitle,
  backgroundColor,
  reverse,
}) => {
  return (
    <Container>
      <article
        className={styles.card}
        style={{ flexFlow: reverse ? "row-reverse" : "row" }}
      >
        <div className={styles.imagesContainer}>
          <div className={styles.placeholderImage}></div>
          <div className={styles.placeholderImage}></div>
        </div>
        <div
          className={styles.aside}
          style={{
            textAlign: reverse ? "right" : "left",
            backgroundColor: backgroundColor || "FFB34B",
          }}
        >
          <h4 className={styles.title}>{title}</h4>
          <span className={styles.subtitle}>{subtitle}</span>
        </div>
      </article>
    </Container>
  )
}

export default ShowcaseCard
