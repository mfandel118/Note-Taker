// Bring in Express & Path & Declare Router
const express = require('express');
const router = express.Router();
const path = require('path');

//GET Route for notes page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET Route for landing page
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// Export router
module.exports = router;