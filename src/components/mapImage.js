import React from "react"
import Img from "gatsby-image"

const MapImage = ({mapImage}) => {
  return (
    <div>
    <h2>{mapImage.heading}</h2>
    <figure><Img fluid={mapImage.mapImage.childImageSharp.fluid} alt="map" className="map-image"/></figure>
    <p>{mapImage.description}</p>
    </div>
  )
}

export default MapImage
