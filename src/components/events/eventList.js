import React from "react"
import EventCard from "./eventCard"

const EventList = ({events, cardStyle}) => {
  return (
    <section className="lever-card-list">
      <h2>Events</h2>
      <ul className="list-unstyled">
      {
        events.map(({node}) => {
          return <EventCard key={node.id} event={node} cardStyle={cardStyle} />
        })
      }
      </ul>
    </section>
  )
}

export default EventList
