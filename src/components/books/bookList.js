import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import BookCard from "./bookCard"

export const bookQuery = graphql`
  query {
    allMarkdownRemark (
      filter: {
        frontmatter: { templateKey: { eq: "book" } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            description
            readLink
            buyLink
            cover {
          	  childImageSharp {
                fluid {
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

const BookList = () => {
  const data = useStaticQuery(bookQuery)

  return (
    <section className="card-deck lever-card-list">
      {
        data.allMarkdownRemark.edges.map(({node}) => {
          return (
            <div>
              <BookCard key={node.id} book={node.frontmatter} />
            </div>
          )
        })
      }
    </section>
  )
}

export default BookList
