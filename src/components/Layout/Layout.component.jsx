import React from "react"
import "./layout.scss"
import Navigation from "../Navigation/Navigation.component"
import Footer from "../Footer/Footer.component"
const Layout = ({ children, darkNav }) => {
  console.log(darkNav)
  return (
    <>
      <Navigation dark={darkNav} />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  )
}
export default Layout
