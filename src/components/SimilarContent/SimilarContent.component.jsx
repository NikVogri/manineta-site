import React from "react"
import styles from "./SimilarContent.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import ItemCard from "../ItemCard/ItemCard.component"

const getSimilarItems = graphql`
  query {
    allContentfulIzdelki(filter: { podzavihek: { eq: "Hisice" } }) {
      edges {
        node {
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

const SimilarContent = ({ similarItems, currentItem }) => {
  const data = useStaticQuery(getSimilarItems)
  return (
    <section className={styles.similarContent}>
      <div className={styles.cardContainer}>
        {data.allContentfulIzdelki.edges.map(({ node }) => (
          <ItemCard node={node} key={node.contentful_id} />
        ))}
      </div>
    </section>
  )
}

export default SimilarContent
