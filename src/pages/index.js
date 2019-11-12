import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BookList from "../components/books/bookList"
import {graphql} from "gatsby"

import Tagline from "../components/tagline"
import Newsletter from "../components/newsletter"

export const IndexQuery = graphql`
query {
  markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
    frontmatter {
      taglineSection {
        text
      }
      newsletterSection {
        heading
        description
        url
        buttonLabel
      }
    }
  }
}
`

const IndexPage = ({data}) => {
  const tagline = data.markdownRemark.frontmatter.taglineSection
  const newsletter = data.markdownRemark.frontmatter.newsletterSection

  return (
    <Layout>
      <SEO title="Home" />
      <div className="index-grid">
        <div className="books-container">
          <BookList />
        </div>
        <div className="tagline-container">
          <Tagline text={tagline.text} />
        </div>
        <div className="newsletter-container">
          <Newsletter newsletter={newsletter} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
