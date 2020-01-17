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
    const now = new Date()
    const year = now.getFullYear()

    return (
    <footer className="footer" role="navigation">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="text-muted mb-2">{title}</Link>
            <small className="text-muted d-block">Amherst, MA</small>      
            <small className="text-muted d-block"><a href="mailto:info@leverpress.org">info@leverpress.org</a></small>      
            <small className="text-muted d-block mb-3">© {year} <a aria-label="Creative Commons Attribution Non-Commercial No Derivatives 4.0 International license" rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
                <img alt="Creative Commons Attribution Non-Commercial No Derivatives 4.0 International license" src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png" />
              </a></small>      
          </div>
          <div className="col-md-3">
            <h5>Our Partners</h5>
            <ul className="list-unstyled text-small">
              <li><a href="https://acpress.amherst.edu/" className="text-muted">Amerhest College Press</a></li>
              <li><a href="http://www.oberlingroup.org/" className="text-muted">Oberlin Group</a></li>
              <li><a href="https://www.publishing.umich.edu" className="text-muted">Michigan Publishing</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Book Series</h5>
            <ul className="list-unstyled text-small">
              <li><a href="/series#series-one" className="text-muted">Series one</a></li>
              <li><a href="/series#series-two" className="text-muted">Series Two</a></li>
              <li><a href="/series#series-three" className="text-muted">Series Three</a></li>
            </ul>
          </div>
        </div>
      </div>  
    </footer>
  )
}

export default Footer
