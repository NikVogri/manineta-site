import React from "react"
import { Carousel } from "react-bootstrap"
import Img from "gatsby-image"
import styles from "./Carousel.module.scss"

const Crousel = ({ images }) => {
  return (
    <Carousel interval={null} indicators={false}>
      {images
        ? images.map((picture, index) => (
            <Carousel.Item className={styles.carouselItem} key={index}>
              <Img fixed={picture.fixed} className={styles.carouselImage} />
            </Carousel.Item>
          ))
        : null}
    </Carousel>
  )
}

export default Crousel
