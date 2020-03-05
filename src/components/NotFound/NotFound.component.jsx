import React from "react"
import Button from "../Button/Button.component"
import Title from "../Title/Title.component"
import logo from "../../images/logo_noText.svg"
import styles from "./NotFound.module.scss"
const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <img src={logo} alt="site logo" />
      <Title title="Stran ni" subtitle="najdena" />
      <p>
        Naše spletno mesto ni dosegljivo ali stran ne obstaja. Prosimo vas, da
        kliknete na spodnji gumb.
      </p>
      <Button to="/">Domov</Button>
    </div>
  )
}

export default NotFound
