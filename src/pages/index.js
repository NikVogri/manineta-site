import React from "react"
import Layout from "../components/Layout/Layout.component"
import Hero from "../components/Hero/Hero.component"
import About from "../components/About/About.component"
import Services from "../components/Services/Services.component"
import MostSold from "../components/MostSold/MostSold.component"
const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <Services />
    <MostSold />
  </Layout>
)

export default IndexPage
