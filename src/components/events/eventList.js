import React from "react"
import EventCard from "./eventCard"

const EventList = (props) => {
  return (
    <section className="card-deck lever-card-list">
    {
      props.events.map(({node}) => {
        return <EventCard key={node.id} event={node} />
      })
    }
    </section>
  )
}

export default EventList
