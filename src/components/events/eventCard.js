import React from "react"
import Img from "gatsby-image"
import {Link} from "gatsby"

const EventCard = ({event, cardStyle}) => {
  const {title, date, image} = event.frontmatter
  const slug = event.fields.slug

  return (
    <div className="event-card-container">
      <Link to={slug}>
        <li className="media my-4">
          <Img fluid={image.childImageSharp.fluid} />
          <div class="media-body">
            <h5 className="mt-0 mb-1">{title}</h5>
            Summary of the event goes here.
          </div>
        </li>
      </Link>
    </div>
  )
}

export default EventCard
