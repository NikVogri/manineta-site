import React from "react"
import styles from "./Button.module.scss"
import { Link } from "gatsby"

const Button = ({ to, reverse, small, children }) => {
  if (reverse) {
    return (
      <Link
        className={`${styles.reverse} ${small && styles.buttonSmall}`}
        href={to}
      >
        {children}
      </Link>
    )
  } else {
    return (
      <Link
        className={`${styles.buttonDefault} ${small && styles.buttonSmall}`}
        href={to}
      >
        <div className={styles.buttonShadow}>{children}</div>
      </Link>
    )
  }
}

export default Button
