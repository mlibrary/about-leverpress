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
  const books = data.books.edges
  const news = data.news.edges
  const events = data.events.edges

  return (
    <Layout>
      <SEO title="Home" />
      <div className="index-grid">
        <div className="books-container">
          <BookList books={books} />
        </div>
        <div className="tagline-container">
          <Tagline text={tagline.text} />
        </div>
        <div className="newsletter-container">
          <Newsletter newsletter={newsletter} />
        </div>
        <div className="news-container">
          <NewsList news={news} cardStyle="tiny-card"/>
        </div>
        <div className="events-container">
          <EventList events={events} cardStyle="tiny-card"/>
        </div>
        <div className="author-container">
          author signup thing
        </div>
        <div className="library-container">
          library signup thing
        </div>
        <div className="video-container">
          <Video video={video} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
