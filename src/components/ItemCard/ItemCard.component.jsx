import React from "react"
import styles from "./ItemCard.module.scss"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ItemCard = ({ node }) => {
  if (!node.slikeIzdelka) {
    return null
  }
  return (
    <div className={styles.card}>
      <Link
        to={`/izdelki/${node.podzavihek.replace(/\s+/g, "-").toLowerCase()}/${
          node.slugIzdelka
        }`}
        className={styles.cardLink}
      >
        <Img fixed={node.slikeIzdelka[0].fixed} className={styles.cardImage} />
        <div className={styles.cardInformation}>
          <span className={styles.category}>Igre</span>
          <span className={styles.title}>{node.imeIzdelka}</span>
        </div>

        <div className={styles.priceContainer}>
          <hr />
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
