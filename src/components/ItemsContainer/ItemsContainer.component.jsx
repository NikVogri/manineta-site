import React from "react"
import styles from "./ItemsContainer.module.scss"
import CardItem from "../ItemCard/ItemCard.component"
import SideBar from "../SideBar/SideBar.component"
import { graphql, useStaticQuery } from "gatsby"

const getAllItems = graphql`
  query {
    allContentfulIzdelki {
      edges {
        izdelek: node {
          imeIzdelka
          cenaIzdelka
          prejsnjaCena
          slugIzdelka
          contentful_id
          slikeIzdelka {
            fixed(width: 180, height: 210) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
const ItemsContainer = () => {
  const {
    allContentfulIzdelki: { edges },
  } = useStaticQuery(getAllItems)

  return (
    <main className={styles.itemContainer}>
      <SideBar className={styles.sidebar} />
      <div className={styles.items}>
        {edges.map(item => (
          <CardItem key={item.izdelek.contentful_id} node={item.izdelek} />
        ))}
      </div>
    </main>
  )
}

export default ItemsContainer
