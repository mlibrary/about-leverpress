import React from 'react'
import Layout from '../components/layout'
import {graphql} from "gatsby"
import Img from "gatsby-image"

const News = ({data}) => {
  const { html } = data.markdownRemark
  const { title, date, image } = data.markdownRemark.frontmatter


  return (
    <Layout>
      <div className="container page-container">
        <h1 className="mb-3">{title}</h1>
        <Img fluid={image.childImageSharp.fluid} />
        <h4 className="mt-4">{date}</h4>
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String!) {
  markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      title
      date(formatString: "MMMM Do, YYYY")
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

export default News
