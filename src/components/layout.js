import React from "react"
import "./bootstrap.min.css"
import "./layout.scss"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
