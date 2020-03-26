import React from "react"
import styles from "./CategoryCard.module.scss"
import { Link } from "gatsby"

const CategoryCard = ({ title, link }) => {
  return (
    <Link
      to={`/izdelki/${link || title.toLowerCase()}`}
      className={styles.link}
    >
      <div className={styles.categoryCard}>
        <span className={styles.title}>{title}</span>
      </div>
    </Link>
  )
}

export default CategoryCard
