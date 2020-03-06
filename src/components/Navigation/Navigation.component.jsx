import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import logo from "../../images/logo.svg"
import styles from "./Navigation.module.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ dark }) => {
  return (
    <Navbar
      className={dark ? styles.darkNavigation : styles.navigation}
      style={{ background: dark ? "" : "transparent" }}
      expand="md"
    >
      <Container>
        <AniLink
          cover
          bg="#f4a53a"
          duration={0.75}
          direction="down"
          to="/"
          className="navbar-brand"
        >
          <img
            src={logo}
            alt="logo"
            style={{ margin: "0", height: "2.5rem" }}
          />
        </AniLink>
        <Navbar.Toggle
          style={{ background: "#fff" }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <AniLink
              cover
              bg="#f4a53a"
              duration={0.75}
              direction="down"
              style={{ color: "#fff" }}
              to="/"
              className="nav-link"
            >
              Domov
            </AniLink>
            <AniLink
              cover
              bg="#f4a53a"
              duration={0.75}
              direction="down"
              style={{ color: "#fff" }}
              to="/izdelki"
              className="nav-link"
            >
              Izdelki
            </AniLink>
            <AniLink
              cover
              bg="#f4a53a"
              duration={0.75}
              direction="down"
              to="/o-nas"
              style={{ color: "#fff" }}
              className="nav-link"
            >
              O nas
            </AniLink>
            <AniLink
              cover
              bg="#f4a53a"
              duration={0.75}
              direction="down"
              to="/kontakt"
              style={{ color: "#fff" }}
              className="nav-link"
            >
              Kontakt
            </AniLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
