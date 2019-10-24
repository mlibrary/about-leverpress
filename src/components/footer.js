import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

export const titleQuery = graphql`
{
    site {
        siteMetadata {
            title
        }
    }

}
`

const Footer = () => {
    const data = useStaticQuery(titleQuery)
    const {title} = data.site.siteMetadata
    
    return (
    <footer className="container">
        <h2>{title}</h2>
    </footer>
  )
}

export default Footer