import React from "react"
// import Img from "gatsby-image"

const Book = ({cover, book}) => {
  const {
    title,
    author,
    readLink,
    buyLink,
    description,
    orderOnPage
  } = book

  const showBuyLink = buyLink === "noBuyLink" ? false : true 

  return (
    <div className="card mb-3 book-card">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={cover} alt={`cover of ${title}`} className="card-img" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
          <h3 id={`book${orderOnPage}`}className="card-title" dangerouslySetInnerHTML={{ __html: title }}></h3>
            <p className="card-subtitle text-muted h6">{author}</p>
            <p className="card-text">{description}</p>
            <a className="card-link btn btn-secondary btn-lg" aria-describedby={`book${orderOnPage}`} href={readLink}>Read free online</a>
            { showBuyLink === true && <a className="card-link btn btn-outline-primary btn-lg" aria-describedby={`book${orderOnPage}`} href={buyLink}>Buy</a> }
          </div>
        </div>
      </div>
    </div>

  )
}

export default Book
