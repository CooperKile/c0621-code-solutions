const express = require('express');
const app = express();
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
const notes = require('./data.json');
app.get(notes, (req, res) => {
  const allNotes = [];
  for (const key in notes) {
    allNotes.push(notes[key]);
  }
});
const fs = require('fs');
fs.readFile('/api/notes', (req, res) => {
  const allNotes = [];
  for (const key in notes) {
    allNotes.push(notes[key]);
  }
});
