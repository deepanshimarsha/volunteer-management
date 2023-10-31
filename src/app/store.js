import { configureStore } from "@reduxjs/toolkit";
import { volunteerSummaryReducer } from "../features/volunteerSummarySlice";
import { volunteersReducer } from "../features/voluteersSlice";
import { eventSummaryReducer } from "../features/eventSummarySlice";
import { eventsReducer } from "../features/eventsSlice";

const store = configureStore({
  reducer: {
    volunteers: volunteersReducer,
    events: eventsReducer,
    eventSummary: eventSummaryReducer,
    volunteerSummary: volunteerSummaryReducer,
  },
});

export default store;
