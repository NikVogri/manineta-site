import React from "react"
import styles from "./MostSold.module.scss"
import { Container } from "react-bootstrap"
import Button from "../Button/Button.component"
import Title from "../Title/Title.component"
import ItemCard from "../ItemCard/ItemCard.component"
const MostSold = ({ items }) => {
  return (
    <section className={styles.mostSold}>
      <Container className={styles.mostSoldContainer}>
        <Title
          title="Popularno"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris arcu, maximus eu convallis sit amet."
        />
        <div className={styles.cardContainer}>
          {items.map(({ node }) => (
            <ItemCard node={node} key={node.contentful_id} />
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <Button small width="150px" to="/izdelki" className={styles.button}>
            Vsi izdelki
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default MostSold
