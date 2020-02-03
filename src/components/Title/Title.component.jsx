import React from "react"
import styles from "./Title.module.scss"
const Title = ({ title, subtitle }) => {
  return (
    <h4 className={styles.title}>
      <span className={styles.mainColor}>{title} </span>
      <span>{subtitle}</span>
    </h4>
  )
}

export default Title
