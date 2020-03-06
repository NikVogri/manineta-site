import React, { useState } from "react"
import { Row, Col } from "react-bootstrap"
import styles from "./ItemInfo.module.scss"
import Modal from "../Modal/Modal.component"
import Button from "../../components/Button/Button.component"
import Carousel from "../Carousel/Carousel.component"

const ItemInfo = ({ data }) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className={styles.itemContainer}>
      <Modal showModal={showModal} closeModal={() => setShowModal(false)} />
      <Row className={styles.itemInfo}>
        <Col sm={12} md={6}>
          <Carousel images={data.slikeIzdelka} />
        </Col>
        <Col sm={12} md={6} className={styles.rightSide}>
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
            <Button noRedirect clicked={() => setShowModal(true)}>
              Povpraševanje
            </Button>
          </div>
        </Col>
      </Row>
      <h4 className={styles.similarTitle}>Podobno</h4>
    </div>
  )
}

export default ItemInfo
