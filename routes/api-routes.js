// Import Express, Path, & UUID & Declare Router
const express = require('express');
const router = express.Router();
const path = require('path');
const uuid = require('../utils/uuid');

// GET Route for all notes in db
router.get('/notes', (req, res) =>
  
);

// POST Route to add new note to db
router.post('/notes', (req, res) =>
  
);

// New note object
const newNote = {
    title,
    text,
    note_id: uuid()
}

// DELETE Route to delete note from db


// Export router
module.exports = router;