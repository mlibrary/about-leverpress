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
    const now = new Date()
    const year = now.getFullYear()

    return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <a href="/" className="text-light mb-2 scala-sans"><img src="/assets/LeverLogo-PMS292.svg" alt="" height="100" width="auto" className="block" /> Lever Press</a>
            <small className="text-light d-block">Ann Arbor, MI</small>      
            <small className="d-block"><a className="text-light" href="mailto:info@leverpress.org">info@leverpress.org</a></small>      
            <p className="social">
              <a href="https://www.facebook.com/LeverPress/"><svg width="24px" height="24px" viewBox="0 0 24 24" className="social-link fb" aria-hidden="false"><title>Facebook</title><path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7h-1.6c-1.25,0-1.49.59-1.49,1.47v1.92h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"></path></svg></a>
              <a href="https://twitter.com/lever_press"><svg width="24px" height="24px" viewBox="0 0 24 24" className="social-link tw" aria-hidden="false"><title>Twitter</title><path d="M22,5.8a8.6,8.6,0,0,1-2.36.65,4.07,4.07,0,0,0,1.8-2.27,8.1,8.1,0,0,1-2.6,1A4.1,4.1,0,0,0,11.75,8a4.73,4.73,0,0,0,.09.93A11.6,11.6,0,0,1,3.39,4.62,4.2,4.2,0,0,0,2.83,6.7a4.09,4.09,0,0,0,1.82,3.4A4,4,0,0,1,2.8,9.6v0a4.11,4.11,0,0,0,3.29,4A4.2,4.2,0,0,1,5,13.81a4,4,0,0,1-.78-.07,4.14,4.14,0,0,0,3.83,2.85A8.22,8.22,0,0,1,3,18.34a6.37,6.37,0,0,1-1-.06,11.48,11.48,0,0,0,6.29,1.84A11.58,11.58,0,0,0,20,8.46c0-.18,0-.36,0-.53A8.31,8.31,0,0,0,22,5.8Z"></path></svg></a>
              <a href="https://bsky.app/profile/leverpress.bsky.social" className="social-link tw" aria-hidden="false">
                <svg width="27px" height="24px" viewBox="0 0 580 510" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <title>Bluesky</title>
                  <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"></path>
                </svg>
              </a>
              <a className="youtube" href="https://www.youtube.com/@leverpress9848/featured"><img src="/assets/youtube-light.svg" alt="YouTube" height="18px" width="auto" /></a>
              <a href="https://visitor.r20.constantcontact.com/manage/optin?v=001WXZkjjlBP1ZO4vWwIA9HU80CKVVKX-DWmCItOAZxMlaI6uN2m3u7Ni8ELHYeO4PkjOocQfUTRPY390FT7lD5ykY3B-6NcZU3GXwUKc1ZRYc%3D"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" className="social-link email" aria-hidden="false"><title>Sign-up for Emails</title><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg></a>
            </p>  
          </div>
          <div className="col-md-3">
            <div className="footer-head scala-sans">Our Partners</div>
            <ul className="list-unstyled text-small">
              <li><a href="https://www.publishing.umich.edu" className="text-light">Michigan Publishing</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="footer-head scala-sans">Peer Review</div>
            <ul className="list-unstyled text-small">
              <li><a href="/peerreview" className="text-light">Our Commitments and Guidelines</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
          <small className="text-light">© {year} <a aria-label="Creative Commons Attribution Non-Commercial No Derivatives 4.0 International license" rel="license" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
                <img className="d-inline" alt="Creative Commons Attribution Non-Commercial No Derivatives 4.0 International license" src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png" />
              </a> · <a className="text-light" href="https://fulcrum.org/accessibility/">Accessibility</a> · <a className="text-light" href="https://fulcrum.org/preservation">Preservation</a> · <a className="text-light" href="https://fulcrum.org/privacy">Privacy</a> · <a className="text-light" href="https://fulcrum.org/terms">Terms</a></small>    
          </div>
          <div className="col-md-6 text-right">
            <small className="text-white scala-sans">Powered by</small> <a href="https://fulcrum.org/"><img className="fulcrum" src="/assets/fulcrum-full-white.svg" alt="Fulcrum logo" height="20" width="auto" /></a>
          </div>
        </div>
      </div>  
    </footer>
  )
}

export default Footer
