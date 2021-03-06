import React from "react"
import styles from "./Modal.module.scss"

import Button from "../Button/Button.component"

import { Link } from "gatsby"
import { FaWindowClose } from "react-icons/fa"
import { FaPhone, FaFacebookF, FaEnvelope } from "react-icons/fa"

const Modal = ({ showModal, closeModal }) => {
  return (
    <div className={`${styles.modal} ${showModal ? styles.showBackdrop : ""} `}>
      <div
        className={`${styles.modalContent} ${
          showModal ? styles.modalShow : ""
        }`}
      >
        <FaWindowClose
          className={styles.modalClose}
          onClick={() => closeModal()}
        />
        <div className={styles.modalMain}>
          <p className={styles.modalWarning}>
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
            <Button to="/kontakt" big>
              Kontakt
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
