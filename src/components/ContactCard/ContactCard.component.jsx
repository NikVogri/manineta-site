import React from "react"
import styles from "./ContactCard.module.scss"
const ContactCard = ({ icon, type, contactInfo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.information}>
        <span className={styles.type}>{type}</span>
        <span className={styles.contactInfo}>{contactInfo}</span>
      </div>
    </div>
  )
}

export default ContactCard
