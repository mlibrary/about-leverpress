import React from "react"
import BookCard from "./bookCard"

const BookList = ({books}) => {

  return (
    <section className="card-deck lever-card-list">
      {
        books.map(({node}) => {
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
