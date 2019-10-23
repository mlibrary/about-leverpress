import React from "react"
import Img from "gatsby-image"

const Book = ({book}) => {
  const {
    title,
    author,
    description,
    readLink,
    buyLink,
    cover
  } = book

  return (
    <article>
      <Img fluid={cover.childImageSharp.fluid} alt={`cover of ${title}`} />
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>{description}</p>
      <a href={readLink}>Read</a>
      <a href={buyLink}>Buy</a>
    </article>
  )
}

export default Book
