import React from "react"
import "./bootstrap.min.css"
import "./layout.scss"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="page-container">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
