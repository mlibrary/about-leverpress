import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Title from "../components/title"
import BookList from "../components/books/bookList"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BookList />
  </Layout>
)

export default IndexPage
