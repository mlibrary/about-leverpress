import React from "react"
import Img from "gatsby-image"

const Book = ({book}) => {
  const {
    title,
    author,
    readLink,
    buyLink,
    cover
  } = book

  return (
    <div className="card lever-card">
      <Img fluid={cover.childImageSharp.fluid}
           alt={`cover of ${title}`}
           className="card-img-top lever-card-img"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-title">{author}</h5>
        <a className="card-link" href={readLink}>Read</a>
        <a className="card-link" href={buyLink}>Buy</a>
      </div>
    </div>
  )
}

export default Book
