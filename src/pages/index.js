import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from "gatsby"

import BookList from "../components/books/bookList"
import Tagline from "../components/tagline"
import Newsletter from "../components/newsletter"
import NewsList from "../components/news/newsList"
import EventList from "../components/events/eventList"
import Video from "../components/video"
import MapImage from "../components/mapImage"

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
    }
  }
  books: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "book" } }
    }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          author
          description
          readLink
          buyLink
          cover {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
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
    limit: 4
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
          date(formatString:"MMMM Do, YYYY")
          image{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  events: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "event" } }
    },
    sort: {
      fields: frontmatter___date,
      order: DESC
    },
    limit: 4
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
          date(formatString:"MMMM Do, YYYY")
          image{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
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
  const books = data.books.edges
  const news = data.news.edges
  const events = data.events.edges

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
        <section class="tagline-newsletter-container">
          <div class="container">
            <div class="row">
              <div className="tagline-container col-md-9">
                <Tagline text={tagline.text} />
              </div>
              <div className="newsletter-container col-md-3">
                <Newsletter newsletter={newsletter} />
              </div>
            </div>
          </div>
        </section>
        <section className="news-events-container container">
          <div className="row">
            <div className="news-container col-md-6">
              <NewsList news={news} />
            </div>
            <div className="events-container col-md-6">
              <EventList events={events} />
            </div>
          </div>
        </section>
        <section className="author-library-container">
          <div class="container">
            <div class="row">
              <div className="author-container col">
                <div className="row">
                <div className="col-md-8">
                    <p>Interested in publishing your next book with us?</p>
                  </div>
                  <div className="col-md-4">
                    <a className="btn btn-lg btn-outline-secondary" href="/info-for#author">Learn more</a>
                  </div>
                </div>
              </div>
              <div className="library-container col">
                <div className="row">
                  <div className="col-md-8">
                    <p>Join over 50 liberal arts colleges and their libraries who support our Open Access mission</p>
                  </div>
                  <div className="col-md-4">
                    <a className="btn btn-lg btn-outline-secondary" href="/info-for#library">Join Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="video-impact-container container">
          <div class="row">
            <div className="video-container col">
              <Video video={video} />
            </div>
            <div className="map-container col">
              <MapImage mapImage={map} />
            </div>
          </div>
        </section>
    </Layout>
  )
}

export default IndexPage
