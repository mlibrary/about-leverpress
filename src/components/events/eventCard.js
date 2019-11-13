import React from "react"
import Img from "gatsby-image"
import {Link} from "gatsby"

const EventCard = ({event, cardStyle}) => {
  const {title, date, image} = event.frontmatter
  const slug = event.fields.slug

  return (
    <div className={`card ${cardStyle || "lever-card"}`}>
      <div className="card-img-top lever-card-img">
        <Link to={slug}>
          <Img fluid={image.childImageSharp.fluid} />
        </Link>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-text">{date}</h5>
      </div>
    </div>
  )
}

export default EventCard
