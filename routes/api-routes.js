// Imports & Router Declaration
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const uuid = require('../utils/uuid');
const notes = require('../db/db.json')

// GET Route for all notes in db
router.get('/api/notes', (req, res) =>
    res.status(200).json(notes)
);

// POST Route to add new note to db
router.post('/api/notes', (req, res) =>

);

// New note object
const newNote = {
    title,
    text,
    note_id: uuid()
}

// DELETE Route to delete note from db
router.delete('/api/notes', (req, res) =>
    
);

// Export router
module.exports = router;