import React from "react"
import styles from "./Title.module.scss"
const Title = ({ title, subtitle, paragraph }) => {
  return (
    <h4 className={styles.title}>
      <span className={styles.mainColor}>{title} </span>
      <span>{subtitle}</span>
      {paragraph ? <p className={styles.paragraph}>{paragraph}</p> : null}
    </h4>
  )
}

export default Title
