// Bring in Express & Path
const express = require('express');
const path = require('path');


// GET Route for landing page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);