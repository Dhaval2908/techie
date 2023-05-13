const express = require('express');
const app = express();
const path = require('path');
const mime = require('mime');
app.use('/css', express.static(__dirname + '/css', { 
  setHeaders: function(res, path, stat) {
    res.set('Content-Type', 'text/css');
  }
}));
app.use('/fonts', express.static(__dirname + '/fonts', {

}));
app.use('/images', express.static(__dirname + '/images', {

}));
app.use('/js', express.static(__dirname + '/js', {

}));
app.use(express.static(path.join(__dirname, 'images')));

// Set up a route for the Coming Soon page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
