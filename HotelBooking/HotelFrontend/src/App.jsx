import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HotelList from './components/HotelList';
import BookingDetails from './components/BookingDetails';
import BookingForm from './components/BookingForm';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [allHotels, setAllHotels] = useState([]);

  // Fetch hotels
  useEffect(() => {
    axios.get('http://localhost:5000/api/hotels').then((response) => {
      setAllHotels(response.data);
      setFilteredHotels(response.data);
    });
  }, []);

  // Handle booking a room
  const handleBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  // Handle searching hotels
  const handleSearch = (query) => {
    if (query === '') {
      setFilteredHotels(allHotels);
    } else {
      setFilteredHotels(
        allHotels.filter((hotel) =>
          hotel.hotel_name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  const handleBackToList = () => {
    setSelectedHotel(null);
  };

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />

      <div className="container">
      {bookings.length > 0 && <BookingDetails bookings={bookings} />}
        {!selectedHotel ? (
          <HotelList hotels={filteredHotels} onHotelSelect={setSelectedHotel} />
        ) : (
          <BookingForm hotel={selectedHotel} onBook={handleBooking}  onBack={handleBackToList} />
        )}
      </div>
    </div>
  );
};

export default App;
