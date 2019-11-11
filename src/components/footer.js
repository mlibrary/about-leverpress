import React from 'react'
import {graphql, useStaticQuery, Link} from 'gatsby'

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
    <footer className="footer navbar fixed-bottom bg-dark">
      <ul className="lever-footer-links">
        <li>
          <Link to="/">
            Lever Press
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
