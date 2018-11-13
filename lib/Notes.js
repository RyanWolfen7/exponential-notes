function Notes() {

  this.notes = []
}

Notes.prototype.listNotes = function () {
  return this.notes;
};

Notes.prototype.delete = function(index) {
  this.notes.splice(index, 1)
};
Notes.prototype.add = function(note) {
  this.notes.push(note);
};

Notes.prototype.update = function (index, title, body) {
  this.notes[index].title = title;
  this.notes[index].body = body;
}

module.exports = Notes;
