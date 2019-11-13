import React from "react"
import EventCard from "./eventCard"

const EventList = ({events, cardStyle}) => {
  return (
    <section className="card-deck lever-card-list">
    {
      events.map(({node}) => {
        return <EventCard key={node.id} event={node} cardStyle={cardStyle} />
      })
    }
    </section>
  )
}

export default EventList
