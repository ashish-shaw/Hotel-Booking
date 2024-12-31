import React, { useState } from 'react';
import '../Navbar.css';

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="navbar">
      <div className="navbar-center">
        <input
          type="text"
          placeholder="Search Hotels"
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
    </div>
  );
};

export default Navbar;
