import React from "react"
import Img from "gatsby-image"

const Book = ({book}) => {
  const {
    title,
    author,
    readLink,
    buyLink,
    description,
    cover
  } = book

  return (
    <div className="col-md-4 card lever-card">
      <Img fluid={cover.childImageSharp.fluid}
           alt={`cover of ${title}`}
           className="card-img-top lever-card-img"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle text-muted">{author}</h6>
        <p className="card-text">{description}</p>
        <a className="card-link" href={readLink}>Read</a>
        <a className="card-link" href={buyLink}>Buy</a>
      </div>
    </div>
  )
}

export default Book
