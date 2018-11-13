function Notes() {
  this.notes =[];
}

Notes.prototype.add = function(note) {
  this.notes.push(note);
};

module.exports = Notes;
