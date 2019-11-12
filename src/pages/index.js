import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BookList from "../components/books/bookList"
import {graphql} from "gatsby"

export const IndexQuery = graphql`
{
  content: markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
    frontmatter{
      templateKey
    }
  }
}
`

const IndexPage = ({data}) => {

  return (
    <Layout>
      <SEO title="Home" />
      <div className="index-grid">
        <div className="books">
          <BookList />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
