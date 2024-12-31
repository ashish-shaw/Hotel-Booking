const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const hotels = require('./hotels.json'); // Hotels data

app.get('/api/hotels', (req, res) => {
  res.json(hotels);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
