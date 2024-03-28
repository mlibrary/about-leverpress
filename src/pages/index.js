import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, Link} from "gatsby"

import BookList from "../components/books/bookList"
import Tagline from "../components/tagline"
import Newsletter from "../components/newsletter"
import NewsList from "../components/news/newsList"
import Video from "../components/video"
import MapImage from "../components/mapImage"
import Catalog from "../components/catalog"

export const IndexQuery = graphql`
query {
  home: markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
    frontmatter {
      taglineSection {
        text
      }
      newsletterSection {
        heading
        description
        url
        buttonLabel
      }
      videoSection {
        heading
        description
        embed
      }
      mapSection {
        heading
        description
        mapImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      catalogSection {
        heading
        catalogImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        catalogPdf
      }
    }
  }
  books: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "book" } }
    },
    sort: {
      fields: frontmatter___orderOnPage,
      order: ASC
    }
  ) {
    edges {
      node {
        fields {
          cover
        }
        id
        frontmatter {
          title
          author
          description
          readLink
          buyLink
          orderOnPage
        }
      }
    }
  }
  news: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "news" } }
    },
    sort: {
      fields: frontmatter___date,
      order: DESC
    },
    limit: 3
  ) {
    edges {
      node {
        id
        fields{
          slug
        }
        html
        frontmatter {
          title
          summary
          date(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
}
`

const IndexPage = ({data}) => {
  const tagline = data.home.frontmatter.taglineSection
  const newsletter = data.home.frontmatter.newsletterSection
  const video = data.home.frontmatter.videoSection
  const map = data.home.frontmatter.mapSection
  const catalog = data.home.frontmatter.catalogSection
  const books = data.books.edges
  const news = data.news.edges

  return (
    <Layout>
      <SEO title="Home" />
        <section className="books-container container">
          <BookList books={books} />
          <div className="row mt-4">
            <div className="col-md-12">
              <p className="text-right">
                <a href="https://fulcrum.org/leverpress">Read more books...</a>
              </p>
            </div>
          </div>
        </section>
        <section className="tagline-catalog-container">
          <div className="container">
            <div className="row">
              <div className="tagline-container col-md-8">
                <Tagline text={tagline.text} />
              </div>
              <div className="catalog-container col-md-4">
                <Catalog catalog={catalog} />
              </div>
            </div>
          </div>
        </section>

        <section className="author-library-container">
          <div className="container">
            <div className="row">
              <div className="author-container col-sm">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <p>Interested in publishing your next book with us?</p>
                    </div>
                    <div className="col-md-6">
                      <a className="btn btn-secondary" href="/authors">Publish With Us</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="newsletter-container col-sm">
                  <Newsletter newsletter={newsletter} />
              </div>
              <div className="library-container col-sm">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <p>Join over 50 liberal arts colleges and their libraries who support our Open Access mission</p>
                    </div>
                    <div className="col-md-4">
                      <a className="btn btn-secondary" href="/join">Join Us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="video-impact-container">
          <div className="container">
          <div className="row">
            <div className="video-container col-md-6">
              <Video video={video} />
            </div>
            <div className="map-container col-md-6">
              <MapImage mapImage={map} />
            </div>
          </div>
          </div>
        </section>
        <section className="news-events-container container">
          <div className="row">
            <div className="news-container col-md-12">
              <NewsList news={news} />
              <div className="row mt-4">
                <div className="col-md-12">
                  <p className="text-right">
                    <Link to="/news">Read all News</Link>
                  </p>
                </div>
              </div>
            </div>            
          </div>
        </section>
    </Layout>
  )
}

export default IndexPage
