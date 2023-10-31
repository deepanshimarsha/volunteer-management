import React from "react";
import { useSelector } from "react-redux";

const EventSummary = ({ eventId }) => {
  const eventSummary = useSelector((state) =>
    state.eventSummary.eventSummaries.find(
      (summary) => summary.eventId === eventId
    )
  );

  if (!eventSummary) {
    return <div>Event summary not found.</div>;
  }

  const { eventDetails, registeredVolunteers, volunteerRoles } = eventSummary;

  return (
    <div>
      <h2>Event Summary - {eventDetails.name}</h2>
      <p>Date: {eventDetails.date}</p>
      <p>Location: {eventDetails.location}</p>
      <p>Description: {eventDetails.description}</p>

      <h3>Registered Volunteers</h3>
      <ul>
        {registeredVolunteers.map((volunteerId) => (
          <li key={volunteerId}>
            {/* Display volunteer details based on volunteer ID */}
          </li>
        ))}
      </ul>

      <h3>Required Roles</h3>
      <ul>
        {volunteerRoles.map((role) => (
          <li key={role.id}>
            Role: {role.name}, Required: {role.requiredNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventSummary;
