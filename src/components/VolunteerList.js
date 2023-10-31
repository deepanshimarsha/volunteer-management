import React from "react";
import { useSelector } from "react-redux";

const VolunteerList = () => {
  const volunteers = useSelector((state) => state.volunteers.list);

  return (
    <div>
      <h2>Volunteers</h2>
      {volunteers.map((volunteer) => (
        <div key={volunteer.id}>{/* Display volunteer details */}</div>
      ))}
    </div>
  );
};

export default VolunteerList;
