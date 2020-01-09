import React from "react"
import BookCard from "./bookCard"
import BookCover from "./bookCover"

const BookList = ({books}) => {

  return (
    <div className="row lever-card-list">
      {
        books.map(({node}) => {
          console.log(node);
          if (node.frontmatter.orderOnPage === 1 || node.frontmatter.orderOnPage === 2) {
            console.log(node);
            return (
              <BookCard key={node.id} book={node.frontmatter} />
            )
          } else {
            return (
              <BookCover key={node.id} book={node.frontmatter} />
            )
          }
        })
      }
    </div>
  )
}

export default BookList
