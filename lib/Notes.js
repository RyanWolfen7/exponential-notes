function Notes() {
  this.notes = []
}

Notes.prototype.delete = function(index) {
  this.notes.splice(index, 1)
}

module.exports = Notes
