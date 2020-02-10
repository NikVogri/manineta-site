import React from "react"
import styles from "./CategoryContainer.module.scss"
import CategoryCard from "../CategoryCard/CategoryCard.component"
import { Container } from "react-bootstrap"
const CategoryContainer = () => {
  return (
    <section>
      <Container className={styles.CategoryContainer}>
        <CategoryCard title="Igre" />
        <CategoryCard title="Ure" />
        <CategoryCard title="Dekoracije" />
        <CategoryCard title="Hišice" />
        <CategoryCard title="Igre" />
        <CategoryCard title="Ure" />
        <CategoryCard title="Dekoracije" />
        <CategoryCard title="Hišice" />
      </Container>
    </section>
  )
}

export default CategoryContainer
