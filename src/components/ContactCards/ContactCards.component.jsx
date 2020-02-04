import React from "react"
import ContactCard from "../ContactCard/ContactCard.component"
import styles from "./ContactCards.module.scss"
import { FaPhone, FaMapMarkedAlt, FaEnvelope } from "react-icons/fa"
const ContactCards = () => {
  return (
    <div className={styles.cartContainer}>
      {/* <ContactCard type={} contactInfo={} icon={}/> */}
      <ContactCard
        type="Pokličite nas"
        contactInfo="051 207 620"
        icon={<FaPhone />}
      />
      <ContactCard
        type="Naslov"
        contactInfo="Senožeti 6, 1262 Dol pri Ljubljani"
        icon={<FaMapMarkedAlt />}
      />
      <ContactCard
        type="Vprašajte nas"
        contactInfo="manineta.creating@ gmail.com"
        icon={<FaEnvelope />}
      />
    </div>
  )
}

export default ContactCards
