// Imports & Router Declaration
const express = require('express');
const router = express.Router();
// const path = require('path');
const uuid = require('../utils/uuid');
const notes = require('../db/db.json');
const {readAndAppend, readFromFile, writeToFile} = require('../utils/fsUtils')


// GET Route for all notes in db
router.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    // res.status(200).json(notes);
    readFromFile('./db/db.json')
    .then((data) => {
        console.log(JSON.parse(data))
        res.json(JSON.parse(data))
    });
});

// POST Route to add new note to db
router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);

    // Destructuring assignment for items in req.body
    const { title, text } = req.body;

    // New note object
    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuid()
        };
        readAndAppend(newNote, './db/db.json');
        res.json(`New note added successfully!`);
    } else {
        res.status(404).send(`Error adding new note. Please try again. Make sure to include a title for your note!`)
    }
}); 


// DELETE Route to delete note from db
router.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    // console.log(noteId);

    const filteredNotes = notes.filter((note) => {
        return note.note_id !== noteId
    });
    console.log(filteredNotes);
    
    writeToFile('./db/db.json', filteredNotes);
    res.send(filteredNotes);
});

// Export router
module.exports = router;