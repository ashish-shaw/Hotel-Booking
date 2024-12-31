import React from 'react';
import '../HotelList.css';

const HotelList = ({ hotels, onHotelSelect }) => {
  return (
    <>
    <h2>Hotels</h2>
    <div className="hotel-list">
      <div className="hotel-items">
        {hotels.length === 0 ? (
          <p>No hotels found.</p>
        ) : (
          hotels.map((hotel) => (
            <div className="hotel-item" key={hotel.id} onClick={() => onHotelSelect(hotel)}>
              <img className="hotel-image" src={hotel.hotel_image} alt={hotel.hotel_name} />
              <div className="hotel-info">
                <h3>{hotel.hotel_name}</h3>
                <p>{hotel.location}</p>
                <p>Rating: {hotel.ratings} ({hotel.number_of_ratings} reviews)</p>
                <p>
                  <span className="original-price">₹{hotel.original_price}</span>
                  <span className="price">₹{hotel.discounted_price}</span>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </>
  );
};

export default HotelList;
