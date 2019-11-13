import React from "react"
import NewsCard from "./newsCard"

const NewsList = ({news, cardStyle}) => {
  return (
    <section className="card-deck lever-card-list">
    {
      news.map(({node}) => {
        return <NewsCard key={node.id} singleNews={node} cardStyle={cardStyle}/>
      })
    }
    </section>
  )
}

export default NewsList
