import React, {useState} from "react"
import {Link} from "gatsby"
import Img from 'gatsby-image'
import {useStaticQuery,graphql} from 'gatsby'

export const getLogo = graphql`
{
  logo:file(relativePath:{eq: "LEVERPRESS-SIDEWAYS-no-icon.png"}) {
    childImageSharp{
      fluid(maxWidth: 700){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Navbar = () => {
  const [isOpen, setNav] = (useState(false))
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  const data = useStaticQuery(getLogo)

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <Img fluid={data.logo.childImageSharp.fluid} className="navbar-brand-logo"/>
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navbar" className={
          isOpen
            ? "collapse navbar-collapse flex-row show"
            : "collapse navbar-collapse flex-row-reverse"
          }
        >
          <ul className="navbar-nav float-right">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <a href="https://www.fulcrum.org/leverpress" className="nav-link">
                Catalog
              </a>
            </li>
            <li>
              <Link to="/authors" className="nav-link">
                Publish With Us
              </Link>
            </li>
            <li>
              <Link to="/join" className="nav-link">
                Join Us
              </Link>
            </li>
            <li>
              <Link to="/impact" className="nav-link">
                Impact
              </Link>
            </li>
            <li>
              <Link to="/news" className="nav-link">
                News
              </Link>
            </li>
            <li>
              <Link to="/events" className="nav-link">
                Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
