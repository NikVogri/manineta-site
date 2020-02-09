import React from "react"
import styles from "./CategoryContainer.module.scss"
import CategoryCard from "../CategoryCard/CategoryCard.component"
import { Container } from "react-bootstrap"
const CategoryContainer = () => {
  return (
    <section>
      <Container className={styles.CategoryContainer}>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </Container>
    </section>
  )
}

export default CategoryContainer
