import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import logo from "../../images/logo.svg"
import styles from "./Navigation.module.scss"
const Header = () => {
  return (
    <Navbar
      className={styles.navigation}
      style={{ background: "#E89D38" }}
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="logo"
            style={{ margin: "0", height: "2.5rem" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          style={{ background: "#fff" }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link style={{ color: "#fff" }} href="/">
              Domov
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }} href="/izdelki">
              Izdelki
            </Nav.Link>
            <Nav.Link href="/Onas" style={{ color: "#fff" }}>
              O nas
            </Nav.Link>
            <Nav.Link href="/kontakt" style={{ color: "#fff" }}>
              Kontakt
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
