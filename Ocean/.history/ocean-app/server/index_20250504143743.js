const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from /data folder
app.use('/data', express.static(path.join(__dirname, 'data')));

// Endpoint to get ocean data
app.get('/data/ocean_data.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'ocean_data.json'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
