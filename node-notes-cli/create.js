function create(notes, newNote) {
  notes.notes[notes.nextID] = newNote;
}
module.exports = create;
