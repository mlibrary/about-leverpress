import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import Title from '../components/title'
import StoryList from '../components/stories/storyList'
import {graphql, Link} from 'gatsby'
import ReactMarkdown from "react-markdown";

const Impact = ({data}) => {
  const {
    title,
    readershipMapDescription,
    googleDataStudioDescription
  } = data.markdownRemark.frontmatter

  const stories = data.stories.edges

  // When we have markdown in the frontmatter, we need to process it
  // with ReactMarkdown (or something) or something similar.
  // When it's in the "html"/not frontmatter, we would "dangerouslySetInnerHTML"

  return (
    <Layout>
      <SEO title={title} />
      <div className="container page-container">
        <Title title={title} />
        
        <section className="cards-container">
          <h2 className="mb-4">Stories of Impact</h2>
          <StoryList stories={stories} />
          <Link to="/stories" className="btn btn-secondary mt-4 float-right">
              Read More Stories
          </Link>
        </section>
        
        <section>
          <div className="readership-map">
            <ReactMarkdown source={readershipMapDescription} />
            <div className="readership-map-embed">
              <iframe title="Lever Press Readership Map" frameborder="0" height="650" width="100%" src="https://maps.publishing.umich.edu/readership-map/?filter.view=123826825"></iframe>
            </div>
          </div>
          <div className="google-data-studio">
            <ReactMarkdown source={googleDataStudioDescription} />
            <div className="embed-responsive embed-responsive-1by1">
              <iframe title="Lever Press Usage Report" className="embed-responsive-item" width="600" height="890" src="https://lookerstudio.google.com/embed/reporting/d7863fe2-201e-4c9c-8df7-88bf6e5a37b0/page/imr4C" frameborder="0" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>          
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query impactPage($id: String!) {
  	markdownRemark(id: {eq: $id}) {
      frontmatter{
        title
        readershipMapDescription
        googleDataStudioDescription
      }
    },
    stories: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "story"}}}, sort: {fields: frontmatter___date, order: DESC}, limit: 2) {
      edges {
        node {
          id
          fields {
            slug
            storyImage
          }
          frontmatter {
            title
            summary  
          }
        }
      }
    }
  }
`

export default Impact
