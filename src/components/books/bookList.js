import React from "react"
import BookCard from "./bookCard"

const BookList = ({books}) => {

  return (
    <div className="card-deck lever-card-list">
      {
        books.map(({node}) => {
          return (
              <BookCard key={node.id} book={node.frontmatter} />
          )
        })
      }
    </div>
  )
}

export default BookList
