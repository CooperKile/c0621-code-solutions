const read = require('./main');
const create = require('./create');
const notes = require('./data.json');
const newNote = process.argv[3];
const operation = process.argv[2];

if (operation === 'read') {
  console.log(read);
} else if (operation === 'create') {
  create(notes, newNote);
}
