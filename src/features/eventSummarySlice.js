import { createSlice } from "@reduxjs/toolkit";
const eventSummarySlice = createSlice({
  name: "eventSummary",
  initialState: {
    eventSummaries: [
      {
        id: 1,
        eventId: 101,
        registeredVolunteers: [1, 2, 3], // Sample volunteer IDs
        volunteerRoles: [
          { id: 1, name: "Role 1", requiredNumber: 5 },
          { id: 2, name: "Role 2", requiredNumber: 3 },
        ],
        eventDetails: {
          id: 101,
          name: "Sample Event 1",
          date: "2023-11-15",
          location: "Sample Location 1",
          description: "Description for Sample Event 1",
        },
      },
      {
        id: 2,
        eventId: 102,
        registeredVolunteers: [2, 3, 4], // Sample volunteer IDs
        volunteerRoles: [
          { id: 3, name: "Role 3", requiredNumber: 7 },
          { id: 4, name: "Role 4", requiredNumber: 4 },
        ],
        eventDetails: {
          id: 102,
          name: "Sample Event 2",
          date: "2023-12-20",
          location: "Sample Location 2",
          description: "Description for Sample Event 2",
        },
      },
    ], // Array to hold event summary details
  },
  reducers: {
    addEventSummary: (state, action) => {
      state.eventSummaries.push(action.payload); // Add a new event summary
    },
    // Other reducers and actions for event summaries
  },
});

export const { addEventSummary } = eventSummarySlice.actions;
export const eventSummaryReducer = eventSummarySlice.reducer;
