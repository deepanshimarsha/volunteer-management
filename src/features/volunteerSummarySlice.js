import { createSlice } from "@reduxjs/toolkit";
const volunteerSummarySlice = createSlice({
  name: "volunteerSummary",
  initialState: {
    volunteerSummaries: [
      {
        id: 1,
        volunteerId: 1,
        contactInformation: "volunteer1@example.com",
        assignedEvents: [101, 102], // Sample event IDs
        volunteerHistory: [
          { id: 1, activity: "Volunteered for Event 1" },
          { id: 2, activity: "Participated in Training Session" },
        ],
      },
      {
        id: 2,
        volunteerId: 2,
        contactInformation: "volunteer2@example.com",
        assignedEvents: [101, 103], // Sample event IDs
        volunteerHistory: [
          { id: 3, activity: "Volunteered for Event 1" },
          { id: 4, activity: "Attended Volunteer Orientation" },
        ],
      },
    ], // Array to hold volunteer summary details
  },
  reducers: {
    addVolunteerSummary: (state, action) => {
      state.volunteerSummaries.push(action.payload); // Add a new volunteer summary
    },
    // Other reducers and actions for volunteer summaries
  },
});

export const { addVolunteerSummary } = volunteerSummarySlice.actions;
export const volunteerSummaryReducer = volunteerSummarySlice.reducer;
