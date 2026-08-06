import React, {useState} from "react"
import {Link} from "gatsby"
// import Img from 'gatsby-image'

//export const getLogo = graphql`
//{
//  logo:file(relativePath:{eq: "LeverLogo.svg"}) {
//    childImageSharp{
//      fluid(maxWidth: 700){
//        ...GatsbyImageSharpFluid
//      }
//    }
//  }
//}
// `

const Navbar = () => {
  const [isOpen, setNav] = (useState(false))
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src="/assets/LeverLogo.svg" alt="" height="70" width="auto" className="navbar-brand-logo"/> <h1>Lever Press</h1>
        </a> 
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
            <li className="nav-item dropdown">
              <a href="#" className="nav-link text-dark dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                About
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/mission">Mission</a>                
                <a className="dropdown-item" href="/governance">Governance structure</a>
                <a className="dropdown-item" href="/membership">Membership model</a>
                <a className="dropdown-item" href="/impact">Impact</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link text-dark dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                Catalog
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="https://fulcrum.org/leverpress">Books</a>                
                <a className="dropdown-item" href="/series">Series</a>
                <a className="dropdown-item" href="/forthcoming">Forthcoming</a>
                <a className="dropdown-item" href="/libraries">Information for libraries</a>
              </div>
            </li>            
            <li className="nav-item dropdown">
              <a href="#" className="nav-link text-dark dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                Publish With Us
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/authors">For authors</a>                
                <a className="dropdown-item" href="/peerreview">Peer review</a>
                <a className="dropdown-item" href="/awards">Awards and prizes</a>
                <a className="dropdown-item" href="/testimonials">Testimonials</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link text-dark dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                Support Us
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/oa-investment-criteria">Investment criteria</a>                
                <a className="dropdown-item" href="/join">Join us as a supporter</a>
                <a className="dropdown-item" href="/supporters">Our supporters</a>
              </div>
            </li>
            <li>
              <Link to="/contact" className="nav-link text-dark">
                Contact
              </Link>
            </li>                                
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
