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
    <div className="card mb-3 lever-card">
      <div className="row no-gutters">
        <div class="col-md-4">
          <Img fluid={cover.childImageSharp.fluid}
             alt={`cover of ${title}`}
            className="card-img"
          /> 
        </div>
        <div class="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle text-muted">{author}</h6>
            <p className="card-text">{description}</p>
            <a className="card-link btn btn-outline-primary btn-lg" role="button" href={readLink}>Read free online</a>
            <a className="card-link btn btn-secondary btn-lg" role="button" href={buyLink}>Buy</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Book
