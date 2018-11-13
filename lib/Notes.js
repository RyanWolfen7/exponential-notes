function Notes() {
  this.notes = [];
}

Notes.prototype.listNotes = function () {
  return this.notes;
};
module.exports = Notes
