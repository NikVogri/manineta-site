import React from "react"
import styles from "./Button.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
      <AniLink
        cover
        bg="#f4a53a"
        duration={0.75}
        direction="down"
        className={`${styles.reverse} ${
          small && !big ? styles.buttonSmall : ""
        } ${big && !small ? styles.buttonBig : ""}`}
        to={to}
      >
        {children}
      </AniLink>
    )
  } else {
    return (
      <AniLink
        cover
        bg="#f4a53a"
        duration={0.75}
        direction="down"
        className={`${styles.buttonDefault} ${
          small && !big ? styles.buttonSmall : ""
        } ${big && !small ? styles.buttonBig : ""}`}
        to={to}
      >
        <div className={styles.buttonShadow}>{children}</div>
      </AniLink>
    )
  }
}

export default Button
