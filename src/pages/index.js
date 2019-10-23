import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import BookList from "../components/book/bookList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title title="Home" />
    <BookList />
  </Layout>
)

export default IndexPage
