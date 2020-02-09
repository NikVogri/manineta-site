import React from "react"
import styles from "./SimilarContent.module.scss"
import ItemCard from "../ItemCard/ItemCard.component"

const SimilarContent = ({ similarItems, currentItem, data }) => {
  return (
    <section className={styles.similarContent}>
      <div className={styles.cardContainer}>
        {data.edges.map(({ izdelek }) => (
          <ItemCard node={izdelek} key={izdelek.contentful_id} />
        ))}
      </div>
    </section>
  )
}

export default SimilarContent
