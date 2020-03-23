import React from "react"
import { Carousel } from "react-bootstrap"
import Img from "gatsby-image"
import styles from "./Carousel.module.scss"

const Crousel = ({ images }) => {
  return (
    <Carousel interval={null}>
      {images
        ? images.map((picture, index) => (
            <Carousel.Item className={styles.carouselItem} key={index}>
              <Img fluid={picture.fluid} className={styles.carouselImage} />
            </Carousel.Item>
          ))
        : null}
    </Carousel>
  )
}

export default Crousel
