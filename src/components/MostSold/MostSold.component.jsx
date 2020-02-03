import React from "react"
import styles from "./MostSold.module.scss"
import { Container } from "react-bootstrap"
import Button from "../Button/Button.component"
import Title from "../Title/Title.component"
const MostSold = () => {
  return (
    <section className={styles.mostSold}>
      <Container>
        <Title
          title="najbolj"
          subtitle="prodano"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris arcu, maximus eu convallis sit amet."
        />
        <Button to="/izdelki">Še več</Button>
      </Container>
    </section>
  )
}

export default MostSold
