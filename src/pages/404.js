import React from "react"
import Layout from "../components/Layout/Layout.component"
import NotFound from "../components/NotFound/NotFound.component"
import SEO from "../components/SEO/SEO"
const NotFoundPage = () => (
  <Layout darkNav>
    <SEO title="Stran ni bila najdena" />
    <NotFound />
  </Layout>
)

export default NotFoundPage
