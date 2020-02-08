import React from "react"
import styles from "./ItemsContainer.module.scss"
import CardItem from "../ItemCard/ItemCard.component"
import SideBar from "../SideBar/SideBar.component"

const ItemsContainer = ({ items }) => {
  console.log(items)
  return (
    <main className={styles.itemContainer}>
      <SideBar className={styles.sidebar} />
      <div className={styles.items}>
        {items.map(({ node }) => (
          <CardItem key={node.contentful_id} node={node} />
        ))}
      </div>
    </main>
  )
}

export default ItemsContainer
