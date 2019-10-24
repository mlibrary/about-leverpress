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
    <section>
      <h2>Books</h2>
      <div class="row">
        {
          data.allMarkdownRemark.edges.map(({node}) => {
            return (
              <div class="col-3">
                <BookCard key={node.id} book={node.frontmatter} />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default BookList
