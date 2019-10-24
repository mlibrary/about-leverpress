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
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <span className="terrible-img-container">
          <Img fluid={data.logo.childImageSharp.fluid} />
        </span>
      </Link>
      <button className="navbar-toggler" type="button" onClick={toggleNav}>
        <span className="navbar-toggler-icon" />
      </button>
      <div className={
        isOpen
          ? "collapse navbar-collapse show"
          : "collapse navbar-collapse"
        }
      >
        <ul className="navbar-nav mx-auto">
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
            <Link to="/info" className="nav-link">
              Info
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
