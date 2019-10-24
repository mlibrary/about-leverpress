import React from "react"
import Img from "gatsby-image"

const News = (props) => {
  console.log(props.singleNews)
  const {title, date, image} = props.singleNews.frontmatter
  const html = props.singleNews.html
  return (
    <article>
      <h4>{title}</h4>
      <Img fluid={image.childImageSharp.fluid} />
      <h6>{date}</h6>
      <p dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}

export default News
