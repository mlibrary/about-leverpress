import React from "react"
import Img from "gatsby-image"
import {Link} from "gatsby"

const News = (props) => {
  const {title, date, image} = props.singleNews.frontmatter
  const slug = props.singleNews.fields.slug

  return (
    <article className="terrible-card-container">
      <h4>{title}</h4>
      <h6>{date}</h6>
      <Link to={slug}>
        <Img fluid={image.childImageSharp.fluid} />
      </Link>
    </article>
  )
}

export default News
