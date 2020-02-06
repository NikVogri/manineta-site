import React from "react"
import Layout from "../components/Layout/Layout.component"
import SideBar from "../components/SideBar/SideBar.component"
import { Container } from "react-bootstrap"
import ItemsContainer from "../components/ItemsContainer/ItemsContainer.component"
const Izdelki = () => {
  return (
    <Layout>
      <ItemsContainer />
    </Layout>
  )
}

export default Izdelki
