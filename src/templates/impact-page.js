import React from 'react'
import Layout from '../components/layout'
import Title from '../components/title'
import {graphql} from 'gatsby'

const Impact = ({data}) => {
  const {
    title,
    readershipMapDescription,
    googleDataStudioDescription
  } = data.markdownRemark.frontmatter
  return (
    <Layout>
    <Title title={title} />
    <div className="readership-map">
      <div dangerouslySetInnerHTML={{ __html: readershipMapDescription }} />
      <div>
        map here
      </div>
    </div>
    <div className="google-data-studio">
      <div dangerouslySetInnerHTML={{ __html: googleDataStudioDescription }} />
      <div>
        data studio here
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
