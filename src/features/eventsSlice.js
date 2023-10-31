import { createSlice } from "@reduxjs/toolkit";

const eventsSlice = createSlice({
  name: "events",
  initialState: {
    list: [
      {
        id: 101,
        name: "Sample Event 1",
        date: "2023-11-15",
        location: "Sample Location 1",
        description: "Description for Sample Event 1",
        requiredRoles: [
          { id: 1, name: "Role 1", requiredNumber: 5 },
          { id: 2, name: "Role 2", requiredNumber: 3 },
        ],
      },
      {
        id: 102,
        name: "Sample Event 2",
        date: "2023-12-20",
        location: "Sample Location 2",
        description: "Description for Sample Event 2",
        requiredRoles: [
          { id: 3, name: "Role 3", requiredNumber: 7 },
          { id: 4, name: "Role 4", requiredNumber: 4 },
        ],
      },
    ], // Initial state with an empty array of events
  },
  reducers: {
    addEvent: (state, action) => {
      state.list.push(action.payload); // Add a new event
    },
    editEvent: (state, action) => {
      // Logic to find and update the event's information
    },
    deleteEvent: (state, action) => {
      // Logic to delete an event from the list
    },
  },
});

export const { addEvent, editEvent, deleteEvent } = eventsSlice.actions;
export const eventsReducer = eventsSlice.reducer;
