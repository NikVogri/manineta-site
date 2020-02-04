import React from "react"
import styles from "./ContactForm.module.scss"
import { Form } from "react-bootstrap"
import Title from "../Title/Title.component"
const ContactForm = () => {
  return (
    <div>
      <Title title="Dodatna" subtitle="vprašanja" />
      <Form
        className={styles.contactForm}
        method="POST"
        action="https://formsubmit.co/65df0db377aee67a89faf199416bcdc2"
      >
        <Form.Group>
          <Form.Label>Ime*</Form.Label>
          <Form.Control type="text" required name="Ime" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Priimek</Form.Label>
          <Form.Control type="text" name="Priimek" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email naslov*</Form.Label>
          <Form.Control type="email" required name="Email naslov" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Sporočilo*</Form.Label>
          <Form.Control as="textarea" rows="5" required name="Sporočilo" />
        </Form.Group>
        <button type="submit" className="submit-button">
          Pošlji
        </button>
      </Form>
    </div>
  )
}

export default ContactForm
