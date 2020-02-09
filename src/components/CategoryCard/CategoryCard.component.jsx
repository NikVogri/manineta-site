import React from "react"
import styles from "./CategoryCard.module.scss"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
const getImages = graphql`
  query {
    categoryCard: file(relativePath: { eq: "kuzaTest.jpg" }) {
      childImageSharp {
        fixed(height: 150, width: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const CategoryCard = ({ title, image }) => {
  const { categoryCard } = useStaticQuery(getImages)
  console.log(categoryCard)
  return (
    <div className={styles.categoryCard}>
      <Link to="/izdelki">
        <Img fixed={categoryCard.childImageSharp.fixed} />
        <span className={styles.title}>Otroški dodatki</span>
      </Link>
    </div>
  )
}

export default CategoryCard
