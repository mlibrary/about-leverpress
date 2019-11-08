import React from "react"
import NewsCard from "./newsCard"

const NewsList = (props) => {
  return (
    <section className="card-deck lever-card-list">
    {
      props.news.map(({node}) => {
        return <NewsCard key={node.id} singleNews={node} />
      })
    }
    </section>
  )
}

export default NewsList
