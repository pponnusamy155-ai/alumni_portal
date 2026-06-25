import React from "react";

function EventCard({ event }) {
  return (
    <div className="card">
      <h3>{event.title}</h3>
      <p><b>Date:</b> {event.date}</p>
      <p><b>Venue:</b> {event.venue}</p>
      <p>{event.description}</p>
    </div>
  );
}

export default EventCard;
