import React, { useState } from 'react';
import '../BookingForm.css';

const BookingForm = ({ hotel, onBook, onBack }) => {
  const [rooms, setRooms] = useState(1);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook({ hotel, rooms, checkIn, checkOut });
  };

  return (
    <div className="booking-form">
      <h3>Book a Room at {hotel.hotel_name}</h3>
      <form onSubmit={handleSubmit}>
        <label>Rooms</label>
        <input
          type="number"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
          min="1"
        />
        <label>Check-in Date</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
        <label>Check-out Date</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
        <button type="submit">Book Now</button>
      </form>
      <button onClick={onBack} className="back-button">
        Back to Hotel List
      </button>
    </div>
  );
};

export default BookingForm;
