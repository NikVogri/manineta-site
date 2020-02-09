import React from "react"
import styles from "./ItemCard.module.scss"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ItemCard = ({ node }) => {
  return (
    <div className={styles.card}>
      <Link
        to={`/izdelki/${node.podzavihek.replace(/\s+/g, "-").toLowerCase()}/${
          node.slugIzdelka
        }`}
        style={{ textDecoration: "none", color: "#000" }}
      >
        <div className={styles.overlay}>
          <span>Podrobnosti</span>
        </div>
        <div className={styles.imageContainer}>
          <Img fixed={node.slikeIzdelka[0].fixed} />
        </div>
        <span className={styles.title}>{node.imeIzdelka}</span>
        <div className={styles.priceContainer}>
          <span className={styles.price}>
            {Number.isInteger(node.cenaIzdelka)
              ? `${node.cenaIzdelka},00`
              : node.cenaIzdelka}
            €
          </span>
          <span className={styles.prevPrice}>
            {Number.isInteger(node.prejsnjaCena)
              ? `${node.prejsnjaCena},00`
              : node.prejsnjaCena}
            €
          </span>
        </div>
      </Link>
    </div>
  )
}

export default ItemCard
