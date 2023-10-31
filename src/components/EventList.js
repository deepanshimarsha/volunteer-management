import React from "react";
import { useSelector } from "react-redux";

const EventList = () => {
  const events = useSelector((state) => state.events.list);

  return (
    <div>
      <h2>Events</h2>
      {events.map((event) => (
        <div key={event.id}>{/* Display event details */}</div>
      ))}
    </div>
  );
};

export default EventList;
