import React from "react"
import BookCard from "./bookCard"
import BookCover from "./bookCover"

const BookList = ({books}) => {

  return (
    <div>
      <div className="row lever-card-list">
        {
          books.map(({node}) => {
            if (node.frontmatter.orderOnPage === 1 || node.frontmatter.orderOnPage === 2) {
              return (
                <BookCard key={node.id} book={node.frontmatter} />
              )
            }
          })
        }
      </div>
      <div className="row lever-card-list">
        {
          books.map(({node}) => {
            if (node.frontmatter.orderOnPage > 2) {
              return (
                <BookCover key={node.id} book={node.frontmatter} />
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default BookList
