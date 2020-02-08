import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styles from "./Footer.module.scss"
import {
  FaPhone,
  FaMapMarkedAlt,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa"
import { Link } from "gatsby"
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className={styles.row}>
          <Col xs={6} md={4}>
            <h5>hitre povezave</h5>
            <ul className={styles.links}>
              <li>
                <Link to="/">Domov</Link>
              </li>
              <li>
                <Link to="/o-nas">O nas</Link>
              </li>
              <li>
                <Link to="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={4}>
            <h5>Kontakt</h5>
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
          </Col>
          <Col xs={6} md={4} className={"d-none  d-md-block"}>
            <h5>Socialna omrežja</h5>
            <ul className={styles.socials}>
              <li>
                <Link to="/nowhere">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link to="/nowhere">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <p className={styles.copyright}>
        Vse pravice pridržane © {new Date().getFullYear()} | MaNiNeTa s.p. |
        Spletno stran izdelal Nik Vogrinec
      </p>
    </footer>
  )
}

export default Footer
