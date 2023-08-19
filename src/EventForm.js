import React, { useState } from 'react';

const EventForm = ({ onAddEvent }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && date.trim()) {
      onAddEvent({ title, date });
      setTitle('');
      setDate('');
    }
  };

  return (
    <form  onSubmit={handleSubmit}>
      <input
        
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
