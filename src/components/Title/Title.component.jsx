import React from "react"
import styles from "./Title.module.scss"
const Title = ({ title }) => {
  return (
    <div className={styles.titleContainer}>
      <h4 className={styles.title}>{title}</h4>
    </div>
  )
}

export default Title
