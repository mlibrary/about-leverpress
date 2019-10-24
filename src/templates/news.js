import React from 'react'
import Layout from '../components/layout'
import {graphql} from "gatsby"
import Img from "gatsby-image"

const News = ({data}) => {
  console.log(data)
  const { html } = data.markdownRemark
  const { title, date, image } = data.markdownRemark.frontmatter


  return (
    <Layout>
      <h1>{title}</h1>
      <Img fluid={image.childImageSharp.fluid} />
      <h4>{date}</h4>
      <p dangerouslySetInnerHTML={{ __html: html }} />
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
