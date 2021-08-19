const newNote = process.argv[3];
const operation = process.argv[2];
const updatedNote = process.argv[4];
const data = require('./data.json');
const fs = require('fs');

if (operation === 'read') {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
} else if (operation === 'create') {
  data.notes[data.nextId] = newNote;
  data.nextId++;
  const dataJSON = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', dataJSON, err => {
    if (err) throw err;
  });
} else if (operation === 'delete') {
  delete data.notes[newNote];
  const dataJSON = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', dataJSON, err => {
    if (err) throw err;
  });
} else if (operation === 'update') {
  data.notes[newNote] = updatedNote;
  const dataJSON = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', dataJSON, err => {
    if (err) throw err;
  });
}
