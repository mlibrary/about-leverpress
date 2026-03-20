import React from "react"
import Img from "gatsby-image"

const MapImage = ({mapImage}) => {
  return (
    <div>
    <h2>{mapImage.heading}</h2>
    <a href="/impact">
      <figure><Img fluid={mapImage.mapImage.childImageSharp.fluid} alt="Image of a map of the world with red pins in specific locations that denote where views of Lever Press titles originated from." className="map-image"/></figure>
      <p>{mapImage.description}</p>
    </a>
    </div>
  )
}

export default MapImage
