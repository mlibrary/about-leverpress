import React from 'react'
import Layout from '../components/layout'
import Title from '../components/title'
import {graphql} from 'gatsby'
import ReactMarkdown from "react-markdown";

const Impact = ({data}) => {
  const {
    title,
    readershipMapDescription,
    googleDataStudioDescription
  } = data.markdownRemark.frontmatter

  // When we have markdown in the frontmatter, we need to process it
  // with ReactMarkdown (or something)
  // When it's in the "html"/not frontmatter, we would "dangerouslySetInnerHTML"

  return (
    <Layout>
      <div className="container page-container">
        <Title title={title} />
        <div className="readership-map">
          <ReactMarkdown source={readershipMapDescription} />
          <div>
            (map embed)
          </div>
        </div>
        <div className="google-data-studio">
          <ReactMarkdown source={googleDataStudioDescription} />
          <div>
            (data studio embed)
          </div>
        </div>
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
    }
  }
`

export default Impact
