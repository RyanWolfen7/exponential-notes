function Notes() {

  this.notes = []
}

Notes.prototype.delete = function(index) {
  this.notes.splice(index, 1)
};
Notes.prototype.add = function(note) {
  this.notes.push(note);
};

module.exports = Notes;
