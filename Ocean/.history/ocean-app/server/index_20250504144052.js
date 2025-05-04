const express = require('express');
const app = express();
const port = 5000;

// Serve the ocean data as JSON
app.get('/data/ocean_data.json', (req, res) => {
  const oceanData = [
    { time: "2025-05-04 10:00", tide: 2.5, temperature: 23.4, salinity: 35.0, waveHeight: 1.2, currentSpeed: 1.0 },
    { time: "2025-05-04 10:05", tide: 2.6, temperature: 23.6, salinity: 35.1, waveHeight: 1.3, currentSpeed: 1.1 },
    { time: "2025-05-04 10:10", tide: 2.7, temperature: 23.8, salinity: 35.2, waveHeight: 1.4, currentSpeed: 1.2 },
    // Add more sample data here
  ];
  
  res.json(oceanData); // Send ocean data as JSON
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
