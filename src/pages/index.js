import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BookList from "../components/books/bookList"
import {graphql} from "gatsby"

export const IndexQuery = graphql`
query {
  markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
    frontmatter{
      taglineSection{
        text
      }
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
          <div class="tagline-container">
            <div class="tagline">
              { data.markdownRemark.frontmatter.taglineSection.text}
            </div>
          </div>
          <div class="newsletter-container">
            newsletter
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
