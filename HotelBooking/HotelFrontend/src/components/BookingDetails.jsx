import React from 'react';
import '../BookingDetails.css';

const BookingDetails = ({ bookings, onCancelBooking }) => {
  return (
    <div className="booking-details">
      <h3>Your Bookings</h3>
      {bookings.map((booking, index) => (
        <div className="booking" key={index}>
          <p>
            {booking.hotel.hotel_name} - {booking.rooms} rooms from {booking.checkIn} to {booking.checkOut}
          </p>
          <button onClick={() => onCancelBooking(index)}>Cancel Booking</button>
        </div>
      ))}
    </div>
  );
};

export default BookingDetails;
