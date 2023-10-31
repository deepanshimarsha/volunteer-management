import "./App.css";
import EventList from "./components/EventList";
import EventSummary from "./components/EventSummary";
import VolunteerList from "./components/VolunteerList";
import VolunteerSummary from "./components/VolunteerSummary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Volunteer management app</h1>
        <VolunteerList />
        <EventList />
        <VolunteerSummary />
        <EventSummary />
      </header>
    </div>
  );
}

export default App;
