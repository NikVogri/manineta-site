import React from "react"
import Title from "../Title/Title.component"
import styles from "./Services.module.scss"
import { Row, Col, Container } from "react-bootstrap"
import { FaBurn, FaTree } from "react-icons/fa"
import { GiWoodPile } from "react-icons/gi"

const Services = () => {
  return (
    <section className={styles.services}>
      <Container>
        <Title title="kaj vam" subtitle="ponujamo" />
        <Row>
          <Col sm={12} md={4}>
            <div className={styles.cardContainer}>
              <GiWoodPile />
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                ipsam, eligendi tempora deserunt distinctio veritatis.
              </span>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className={`${styles.cardContainer} mt-4 m-md-0 mb-4`}>
              <FaTree />
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                ipsam, eligendi tempora deserunt distinctio veritatis.
              </span>
            </div>
          </Col>
          <Col sm={12} md={4}>
            <div className={styles.cardContainer}>
              <FaBurn />
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                ipsam, eligendi tempora deserunt distinctio veritatis.
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services
