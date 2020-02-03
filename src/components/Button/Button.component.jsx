import React from "react"
import styles from "./Button.module.scss"

const Button = ({ to, reverse, children }) => {
  console.log(reverse)
  return (
    <a
      className={`${styles.button} ${
        reverse ? styles.btnReverse : styles.btnDefault
      }`}
      href={to}
    >
      {children}
    </a>
  )
}

export default Button
