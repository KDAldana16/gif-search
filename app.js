
// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware

// Routes
app.get('/', (req, res) => {
  res.send('Hello Squireel');
})

// Start Server

app.listen(3000, () => {
  console.log('Gif Search listening on port Hello Squirrel');
});
