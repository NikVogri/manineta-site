import React from "react"
import styles from "./MostSold.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import Button from "../Button/Button.component"
import Title from "../Title/Title.component"
import ItemCard from "../ItemCard/ItemCard.component"
const MostSold = () => {
  return (
    <section className={styles.mostSold}>
      <Container>
        <Title
          title="najbolj"
          subtitle="prodano"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris arcu, maximus eu convallis sit amet."
        />
        <Row className={styles.cardContainer}>
          <Col sm={6} md={3}>
            <ItemCard />
          </Col>
          <Col sm={6} md={3}>
            <ItemCard />
          </Col>
          <Col sm={6} md={3}>
            <ItemCard />
          </Col>
          <Col sm={6} md={3}>
            <ItemCard />
          </Col>
        </Row>
        <Button to="/izdelki">Še več</Button>
      </Container>
    </section>
  )
}

export default MostSold
