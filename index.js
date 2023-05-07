const express = require('express');
const app = express();

// Set up a route for the Coming Soon page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
