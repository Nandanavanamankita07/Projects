// /server/index.js

const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from /data folder
app.use('/data', express.static(path.join(__dirname, 'data')));

// Simple endpoint to test the server
app.get('/', (req, res) => {
  res.send('OceanEye Backend is running');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
