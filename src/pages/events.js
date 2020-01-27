import React from "react"
import {graphql} from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import EventList from "../components/events/eventList"

const Events = ({data}) => {
  const events = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Events" />
      <div className="container page-container">
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <EventList events={events} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "event" } }
    },
    sort: {
      fields: frontmatter___date,
      order: DESC
    }
  ) {
    edges {
      node {
        id
        fields{
          slug
        }
        html
        frontmatter {
          title
          summary
          date(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
}
`

export default Events
