import React from "react"
import Img from "gatsby-image"

const BookCover = ({book}) => {
  return (
    <div className="card mb-3 lever-card">
      <a href={book.readLink}>
        <div className="row no-gutters">
          <div className="col-md-12">
            <Img fluid={book.cover.childImageSharp.fluid}
               alt={`cover of ${book.title}`}
              className="cover-only-img"
            />
          </div>
        </div>
      </a>
    </div>
  )
}

export default BookCover
