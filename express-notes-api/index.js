const express = require('express');
const app = express();
const notes = require('./data.json');

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/notes', (req, res) => {
  const allNotes = [];
  for (const key in notes) {
    allNotes.push(notes[key]);
  }
  res.send(allNotes);
});

app.get('/api/notes/:id', (req, res) => {
  const errorObj = {
    400: {
      400: 'id must be a positive integer'
    },
    404: {
      404: 'cannot find note with id'
    }
  };
  if (req.params.id < 0) {
    res.status(400).json(errorObj[400]);
  } else if (notes.notes[req.params.id]) {
    res.json(notes.notes[req.params.id]);
  } else {
    res.status(404).json(errorObj[404]);
  }
});

app.get('/api/notes/:id', (req, res) => {
  const errorObj = {
    400: {
      400: 'id must be a positive integer'
    },
    404: {
      404: 'cannot find note with id'
    }
  };
  if (req.params.id < 0) {
    res.status(400).json(errorObj[400]);
  } else if (notes.notes[req.params.id]) {
    delete res.json(notes.notes[req.params.id]);
  } else {
    res.status(404).json(errorObj[404]);
  }
});
