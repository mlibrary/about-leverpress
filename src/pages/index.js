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
        <section className="row books-container card-deck lever-card-list">
          <BookList books={books} />
        </section>
        <section className="row">
          <div className="tagline-container col-md-6">
            <Tagline text={tagline.text} />
          </div>
          <div className="newsletter-container col-md-6">
            <Newsletter newsletter={newsletter} />
          </div>
        </section>
        <section className="row">
          <div className="news-container col-md-9">
            <NewsList news={news} cardStyle="tiny-card"/>
          </div>
          <div className="events-container col-md-3">
            <EventList events={events} cardStyle="tiny-card"/>
          </div>
        </section>
        <section className="row">
          <div className="author-container col-md-6">
            author signup thing
          </div>
          <div className="library-container col-md-6">
            library signup thing
          </div>
        </section>
        <section className="row">
          <div className="video-container col-md-6">
            <Video video={video} />
          </div>
          <div className="map-container col-md-6">
            <MapImage mapImage={map} />
          </div>
        </section>
    </Layout>
  )
}

export default IndexPage
