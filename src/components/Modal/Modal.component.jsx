import React from "react"
import styles from "./Modal.module.scss"
import { FaWindowClose } from "react-icons/fa"
const Modal = ({ closeModal }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <FaWindowClose className={styles.modalClose} onClick={closeModal} />
        this is just a test
        <button onClick={closeModal}>heellloo</button>
      </div>
    </div>
  )
}

export default Modal
