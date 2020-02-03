import React from "react"
import styles from "./Button.module.scss"

const Button = ({ to, reverse, small, children }) => {
  console.log(reverse)
  return (
    <a
      className={`${styles.button} ${
        reverse ? styles.btnReverse : styles.btnDefault
      } ${small ? styles.btnSmall : styles.btnSizeDefault}`}
      href={to}
    >
      {children}
    </a>
  )
}

export default Button
