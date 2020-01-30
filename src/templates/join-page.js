import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import Title from '../components/title'
import {graphql} from 'gatsby'

const Join = ({data}) => {
  const title = data.markdownRemark.frontmatter.title
  const html = data.markdownRemark.html
  return (
    <Layout>
      <SEO title={title} />
      <div className="container page-container">
        <div className="row justify-content-end">
          <a class="btn btn-primary btn-lg" href="https://docs.google.com/forms/d/11v45JsQO24z5PbNhQUMLFZl-GmR1brPxZQ_dk4GVX8w/viewform?edit_requested=true" role="button">Make a Membership Pledge</a>
        </div>
        <div className="row">
          <Title title={title} />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query joinPage($id: String!) {
  	markdownRemark(id: {eq: $id}) {
      html
      frontmatter{
        title
      }
    }
  }
`

export default Join
