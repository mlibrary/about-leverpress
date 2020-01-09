import React from "react"
import Img from "gatsby-image"

const BookCover = ({book}) => {
  return (
    <div>
      <Img fluid={book.cover.childImageSharp.fluid}
         alt={`cover of ${book.title}`}
        className="card-img"
      />
    </div>
  )
}

export default BookCover
