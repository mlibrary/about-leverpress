import React from "react"
import Img from "gatsby-image"
import {Link} from "gatsby"

const EventCard = (props) => {
  const {title, date, image} = props.event.frontmatter
  const slug = props.event.fields.slug

  return (
    <div className="card lever-card">
      <div className="card-img-top lever-card-img">
        <Link to={slug}>
          <Img fluid={image.childImageSharp.fluid} />
        </Link>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-title">{date}</h5>
      </div>
    </div>
  )
}

export default EventCard
