// Imports & Router Declaration
const express = require('express');
const router = express.Router();
const path = require('path');
const uuid = require('../utils/uuid');
const notes = require('../db/db.json');
const {readAndAppend, readFromFile} = require('../utils/fsUtils')


// GET Route for all notes in db
router.get('/api/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    // res.status(200).json(notes);
    readFromFile(notes)
    .then((data) => res.json(JSON.parse(data)));
});

// POST Route to add new note to db
router.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);

    // Destructuring assignment for items in req.body
    const { title, text } = req.body;

    // New note object
    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid()
        };
        readAndAppend(newNote, notes);
        res.json(`New note added successfully!`);
    } else {
        res.error(`Error adding new note. Please try again. Make sure to include a title for your note!`)
    }

});


// DELETE Route to delete note from db
// router.delete('/api/notes/:id', (req, res) => {

// });

// Export router
module.exports = router;