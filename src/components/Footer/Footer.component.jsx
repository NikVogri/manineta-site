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
            <FaPhone /> <span>051 207 620</span>
          </li>
          <li>
            <FaMapMarkedAlt /> <span>Senožeti 6, Dol pri Ljubljani</span>
          </li>
          <li>
            <FaEnvelope /> <span>manineta.creating@ gmail.com</span>
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
