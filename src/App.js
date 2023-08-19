
import React, { useState } from 'react';

import EventForm from './EventForm';
import EventList from './EventList';


function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };
 

  return (
    <div className="App">
      <h1>Event Management App</h1>
      <EventForm onAddEvent={addEvent} />
      <EventList events={events} />
     
    </div>
    
  );
}


export default App;

