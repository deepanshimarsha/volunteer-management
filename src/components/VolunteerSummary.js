import React from "react";
import { useSelector } from "react-redux";

const VolunteerSummary = ({ volunteerId }) => {
  const volunteerSummary = useSelector((state) =>
    state.volunteerSummary.volunteerSummaries.find(
      (summary) => summary.volunteerId === volunteerId
    )
  );

  if (!volunteerSummary) {
    return <div>Volunteer summary not found.</div>;
  }

  const { contactInformation, assignedEvents, volunteerHistory } =
    volunteerSummary;

  return (
    <div>
      <h2>Volunteer Summary</h2>
      <p>Contact Information: {contactInformation}</p>

      <h3>Assigned Events</h3>
      <ul>
        {assignedEvents.map((eventId) => (
          <li key={eventId}>{/* Display event details based on event ID */}</li>
        ))}
      </ul>

      <h3>Volunteer History</h3>
      <ul>
        {volunteerHistory.map((historyItem) => (
          <li key={historyItem.id}>
            {/* Display volunteer's historical activity details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VolunteerSummary;
