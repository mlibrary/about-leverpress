import React from "react"

const Newsletter = ({newsletter}) => {
  return (
    <div>
      <h2>{newsletter.heading}</h2>
      <p>{newsletter.description}</p>
      <a href={newsletter.url}>{newsletter.buttonLabel}</a>
    </div>
  )
}

export default Newsletter
