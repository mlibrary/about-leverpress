import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import EventList from "../components/news/newsList"

const Events = ({data}) => {
  const events = data.allMarkdownRemark.edges

  return (
    <Layout>
      <EventList events={events} />
    </Layout>
  )
}

export const query = graphql`
{
  allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "event" } }
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
