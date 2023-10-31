import { createSlice } from "@reduxjs/toolkit";

const volunteersSlice = createSlice({
  name: "volunteers",
  initialState: {
    list: [
      {
        id: 1,
        name: "John Doe",
        contactInformation: "john@example.com",
        skills: ["First Aid", "Communication"],
        availability: "Weekends",
        areasOfInterest: ["Healthcare", "Community Support"],
        assignedEvents: [101, 102], // Sample event IDs
      },
      {
        id: 2,
        name: "Jane Smith",
        contactInformation: "jane@example.com",
        skills: ["Teaching", "Organization"],
        availability: "Evenings",
        areasOfInterest: ["Education", "Youth Programs"],
        assignedEvents: [101, 103], // Sample event IDs
      },
    ], // Initial state with an empty array of volunteers
  },
  reducers: {
    addVolunteer: (state, action) => {
      state.list.push(action.payload); // Add a new volunteer
    },
    editVolunteer: (state, action) => {
      // Logic to find and update the volunteer's information
    },
    deleteVolunteer: (state, action) => {
      // Logic to delete a volunteer from the list
    },
  },
});

export const { addVolunteer, editVolunteer, deleteVolunteer } =
  volunteersSlice.actions;
export const volunteersReducer = volunteersSlice.reducer;
