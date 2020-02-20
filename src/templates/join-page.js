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
        <div className="row justify-content-end mx-lg-n5">
            <div className="col-md-3 py-3 px-lg-5">
              <a class="btn btn-primary btn-lg" href="https://forms.gle/3kDMmHqjVC3a7w358" role="button">Make a Membership Pledge</a>
            </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Title title={title} />
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
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
