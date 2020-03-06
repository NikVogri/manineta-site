import React from "react"
import styles from "./Button.module.scss"
import { Link } from "gatsby"

const Button = ({
  to,
  reverse,
  small,
  big,
  noRedirect,
  type,
  clicked,
  children,
}) => {
  if (noRedirect) {
    return (
      <button
        type={type && type}
        className={styles.buttonDefault}
        onClick={clicked}
      >
        {children}
      </button>
    )
  }

  if (reverse) {
    return (
      <Link
        className={`${styles.reverse} ${
          small && !big ? styles.buttonSmall : ""
        } ${big && !small ? styles.buttonBig : ""}`}
        to={to}
      >
        {children}
      </Link>
    )
  } else {
    return (
      <Link
        className={`${styles.buttonDefault} ${
          small && !big ? styles.buttonSmall : ""
        } ${big && !small ? styles.buttonBig : ""}`}
        to={to}
      >
        <div className={styles.buttonShadow}>{children}</div>
      </Link>
    )
  }
}

export default Button
