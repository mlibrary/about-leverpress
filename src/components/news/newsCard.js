import React from "react"
import Img from "gatsby-image"
import {Link} from "gatsby"

const NewsCard = ({singleNews, cardStyle}) => {
  const {title, summary, date, image} = singleNews.frontmatter
  const slug = singleNews.fields.slug
  var showImage;
  if (image) {
    showImage =  <div className="col-md-4 card-image">
                   <Img fluid={image.childImageSharp.fluid} />
                 </div>
  }

  return (
    <div className="blog-card-container">
      <Link to={slug}>
        <div className="card mb-3">
          <div className="row no-gutters">
          {showImage}
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{summary}</p>
                <p className="published"><small className="text-muted">Published {date}</small></p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default NewsCard
