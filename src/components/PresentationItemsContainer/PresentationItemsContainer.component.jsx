import React from "react"
import styles from "./PresentationItemsContainer.module.scss"
import { Container } from "react-bootstrap"
import Title from "../Title/Title.component"
import ItemCard from "../ItemCard/ItemCard.component"
const MostSold = ({ items, title }) => {
  return (
    <section className={styles.mostSold}>
      <Container>
        <Title title={title} />
        <div className={styles.cardContainer}>
          {items.map(({ node }) => (
            <ItemCard node={node} key={node.contentful_id} big />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default MostSold
