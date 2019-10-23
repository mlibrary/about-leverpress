import React from "react"

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
      <img src={cover} alt={`cover of ${title}`} />
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>{description}</p>
      <a href={readLink}>Read</a>
      <a href={buyLink}>Buy</a>
    </article>
  )
}

export default Book
