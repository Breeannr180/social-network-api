const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(routes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/social_network', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
