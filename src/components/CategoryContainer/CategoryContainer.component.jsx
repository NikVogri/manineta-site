import React from "react"
import styles from "./CategoryContainer.module.scss"
import CategoryCard from "../CategoryCard/CategoryCard.component"
import { Container } from "react-bootstrap"
import Title from "../Title/Title.component"

const CategoryContainer = () => {
  return (
    <section className={styles.category}>
      <Container>
        <Title subtitle="Kategorije" />
        <div className={styles.CategoryContainer}>
          <CategoryCard title="Igre" />
          <CategoryCard title="Ure" />
          <CategoryCard title="Dekoracije" />
          <CategoryCard title="Hišice" />
          <CategoryCard title="Igre" />
          <CategoryCard title="Ure" />
          <CategoryCard title="Dekoracije" />
          <CategoryCard title="Hišice" />
        </div>
      </Container>
    </section>
  )
}

export default CategoryContainer
