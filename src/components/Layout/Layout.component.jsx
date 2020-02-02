import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Navigation from "../Navigation/Navigation.component"
import Footer from "../Footer/Footer.component"
const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  )
}
export default Layout
