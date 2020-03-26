import React from "react"
import styles from "./CategoryContainer.module.scss"
import CategoryCard from "../CategoryCard/CategoryCard.component"
import { Container } from "react-bootstrap"
const CategoryContainer = () => {
  return (
    <section className={styles.category}>
      <Container>
        {/* <Title title="Kategorije" /> */}
        <div className={styles.CategoryContainer}>
          <CategoryCard title="Igre" />
          <CategoryCard title="Napis imen" link="napis-imen" />
          <CategoryCard title="Ure" />
          <CategoryCard title="Dekoracija" />
          <CategoryCard title="Uhani" />
          <CategoryCard title="Verižice" link="verizice" />
          <CategoryCard title="Hišice" link="hisice" />
          <CategoryCard title="Dodatki" />
        </div>
      </Container>
    </section>
  )
}

export default CategoryContainer
