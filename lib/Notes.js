function Notes() {
  this.notes =[];
}

Notes.prototype.add = function(note) {
  this.notes.push(note);
};

Notes.prototype.update = function (index, title, body) {
  this.notes[index].title = title;
  this.notes[index].body = body;
}

module.exports = Notes;
