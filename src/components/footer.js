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
    <footer className="footer navbar bg-dark" role="navigation">
      <div className="container">
        <ul className="lever-footer-links">
          <li>
            <Link to="/">
              {title}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
