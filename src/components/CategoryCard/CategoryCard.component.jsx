// import React from "react"
// import styles from "./CategoryCard.module.scss"
// import Img from "gatsby-image"
// import { graphql, useStaticQuery } from "gatsby"
// import { Link } from "gatsby"
// const getImages = graphql`
//   query {
//     categoryCard: file(relativePath: { eq: "kuzaTest.jpg" }) {
//       childImageSharp {
//         fixed(height: 120, width: 240) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `
// const CategoryCard = ({ title, image }) => {
//   const { categoryCard } = useStaticQuery(getImages)
//   return (
//     <div className={styles.categoryCard}>
//       <Link to="/izdelki">
//         <Img
//           fixed={categoryCard.childImageSharp.fixed}
//           className={styles.image}
//         />
//         <span className={styles.title}>{title}</span>
//       </Link>
//     </div>
//   )
// }

// export default CategoryCard
