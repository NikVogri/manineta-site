import React from "react"
import styles from "./Modal.module.scss"
import { FaWindowClose } from "react-icons/fa"
import Button from "../Button/Button.component"
import { Link } from "gatsby"
import { FaPhone, FaFacebookF, FaEnvelope } from "react-icons/fa"
const Modal = ({ closeModal }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <FaWindowClose className={styles.modalClose} onClick={closeModal} />
        <main className={styles.modalMain}>
          <p>
            Nakup preko spletne strani trenutno ni mogoč. Prosimo vas, da nas
            kontaktirate.
          </p>
          <Link to="/kontakt">
            <div className={styles.contactContainer}>
              <div className={styles.iconContainer}>
                <FaPhone />
              </div>
              <span>051 207 620</span>
            </div>
          </Link>
          <Link to="/kontakt">
            <div className={styles.contactContainer}>
              <div className={styles.iconContainer}>
                <FaEnvelope />
              </div>
              <span>manineta.creating</span>
            </div>
          </Link>
          <a
            href="https://www.facebook.com/manineta.graviranje.3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.contactContainer}>
              <div className={styles.iconContainer}>
                <FaFacebookF />
              </div>
              <span>/manineta.graviranje.3</span>
            </div>
          </a>
          <div className={styles.button}>
            <Button to="/kontakt" small>
              Kontakt
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Modal
