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
      <div className="jumbotron join-jumbo">
        <div className="container">
          <Title title={title}/>
          <p className="join-tag lead">A better kind of open</p><br/>
          <p class="lead"><span class="intro scala-sans text-light">Lever Press</span> is a membership-based university press that aims to produce the highest quality scholarship in an economically sustainable model, embody and reflect the values of the liberal arts, and lead the way in establishing best practices for born-digital, peer reviewed, open access monograph publishing at no cost to our authors or their academic institutions.</p>            
        </div>
      </div>
      <div className="container page-container join-us">
        <div dangerouslySetInnerHTML={{ __html: html }} />
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
