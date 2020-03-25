import React from "react"
import { Container } from "react-bootstrap"
import styles from "./Footer.module.scss"
import { FaPhone, FaMapMarkedAlt, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <Container className={styles.footer}>
        <ul className={styles.contacts}>
          <li>
            <FaPhone /> 051 207 620
          </li>
          <li>
            <FaMapMarkedAlt /> Senožeti 6, Dol pri Ljubljani
          </li>
          <li>
            <FaEnvelope /> manineta.creating@ gmail.com
          </li>
        </ul>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} MANINETA CREATING VSE PRAVICE PRIDRŽANE.
          IZDELAVA NIK VOGRINEC
        </p>
      </Container>
    </footer>
  )
}

export default Footer
