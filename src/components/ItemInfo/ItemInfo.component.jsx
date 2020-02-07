import React from "react"
import { Row, Col, Carousel } from "react-bootstrap"
import Img from "gatsby-image"
import styles from "./ItemInfo.module.scss"
import Button from "../Button/Button.component"
import Title from "../Title/Title.component"
const ItemInfo = ({ data }) => {
  console.log(data)
  return (
    <main className={styles.itemContainer}>
      <Row className={styles.itemInfo}>
        <Col sm={12} md={6}>
          <Carousel interval={null} indicators={false}>
            {data.slikeIzdelka.map(picture => (
              <Carousel.Item className={styles.carouselItem}>
                <Img fluid={picture.fluid} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col sm={12} md={6}>
          <h4>{data.imeIzdelka}</h4>
          <p>{data.opisIzdelka.internal.content}</p>
          <ul className={styles.specificationInfo}>
            <li>Velikost: {data.velikostIzdelka}</li>
            <li>Materijal: {data.materijalIzdelka}</li>
          </ul>
          <div className={styles.priceContainer}>
            <div>
              <span>Redna cena:</span>
              <span className={styles.regularPrice}>
                {Number.isInteger(data.prejsnjaCena)
                  ? `${data.prejsnjaCena},00`
                  : data.prejsnjaCena}
                €
              </span>
            </div>
            <div>
              <span>Cena:</span>
              <span className={styles.actualPrice}>
                {Number.isInteger(data.cenaIzdelka)
                  ? `${data.cenaIzdelka},00`
                  : data.cenaIzdelka}
                €
              </span>
            </div>
            <div>
              <span>Zaloga:</span>
              <span className={styles.available}>
                {data.zalogaIzdelka ? "Na zalogi" : "Ni zaloge"}
              </span>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button className={styles.button} styles={{ width: "2rem" }} small>
              Povpraševanje
            </Button>
          </div>
        </Col>
      </Row>
      <h4 className={styles.similarTitle}>Podobno</h4>
    </main>
  )
}

export default ItemInfo