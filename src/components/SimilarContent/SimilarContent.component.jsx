import React from "react"
import styles from "./SimilarContent.module.scss"
import ItemCard from "../ItemCard/ItemCard.component"

const SimilarContent = ({ data }) => {
  console.log(data)
  return (
    <section className={styles.similarContent}>
      <div className={styles.cardContainer}>
        {data.map(({ izdelek }) => (
          <ItemCard node={izdelek} key={izdelek.contentful_id} />
        ))}
      </div>
    </section>
  )
}

export default SimilarContent
