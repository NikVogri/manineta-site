import React from "react"
import styles from "./Button.module.scss"

const Button = props => {
  console.log(props)
  return (
    <a
      className={`${styles.button} ${props.big ? "big" : "medium"}`}
      href="/izdelki"
    >
      {props.children}
    </a>
  )
}

export default Button
