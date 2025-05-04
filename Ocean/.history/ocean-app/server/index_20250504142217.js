// server/index.js

const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Ocean API base URL
const OCEAN_API_URL = 'https://api.oceanservice.example/data';  // Replace with your chosen API URL

// Fetch real-time ocean data
app.get('/api/ocean-data', async (req, res) => {
  try {
    const response = await axios.get(OCEAN_API_URL, {
      params: {
        apiKey: process.env.OCEAN_API_KEY, // API key from the .env file
      },
    });
    res.json(response.data); // Send back the data to frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching ocean data' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
