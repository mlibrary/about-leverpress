import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import EventList from "../components/events/eventList"

const Events = ({data}) => {
  const events = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div className="container page-container">
        <EventList events={events} />
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
          date(formatString:"MMMM Do, YYYY")
          image{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`

export default Events
