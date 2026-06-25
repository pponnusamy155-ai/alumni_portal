import React, { useEffect, useState } from "react";
import API from "../api";
import EventCard from "../components/EventCard";

function Events() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    date: "",
    venue: "",
    description: ""
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const res = await API.get("/events");
    setEvents(res.data);
  };

  const addEvent = async (e) => {
    e.preventDefault();
    try {
      await API.post("/events", form);
      alert("Event added");
      setForm({ title: "", date: "", venue: "", description: "" });
      fetchEvents();
    } catch (error) {
      alert("Login required to add event");
    }
  };

  return (
    <div className="container">
      <h2>Events</h2>

      <form onSubmit={addEvent} className="form">
        <input placeholder="Event Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <input placeholder="Date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
        <input placeholder="Venue" value={form.venue} onChange={(e) => setForm({ ...form, venue: e.target.value })} required />
        <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
        <button type="submit">Add Event</button>
      </form>

      <div className="grid">
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
}

export default Events;
