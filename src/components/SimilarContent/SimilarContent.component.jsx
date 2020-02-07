import React from "react"
import TestItemCard from "../ItemsContainer/TestItemCard"
import styles from "./SimilarContent.module.scss"
const SimilarContent = ({ similarItems }) => {
  console.log(similarItems)
  return (
    <section className={styles.similarContent}>
      <div className={styles.cardContainer}>
        <TestItemCard />
        <TestItemCard />
        <TestItemCard />
        <TestItemCard />
      </div>
    </section>
  )
}

export default SimilarContent
