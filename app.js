let notePad;
window.addEventListener("load", function() {

  notePad = new NotePad();

  document.getElementById("app").innerHTML = IndexPage().render(notePad.listNotes());
}, false)

const handleNoteDetailPage = function(index) {
  note = notePad.find(index);
  document.getElementById("app").innerHTML = NoteDetail().render(note);
}

const handleNoteEditPage = function(index) {
  document.getElementById("app").innerHTML = NotesEditPageView().render(notePad.listNotes()[index], index);
}

const updateNote = function(index) {
  title = document.getElementById('title').value;
  body = document.getElementById('body').value;
  notePad.update(index, title, body);
  document.getElementById("app").innerHTML = IndexPage().render(notePad.listNotes());
}

const handleDeleteNote = function(index) {
  notePad.deleteNote(index);
  document.getElementById("app").innerHTML = IndexPage().render(notePad.listNotes());
}

const renderAddNote = function() {
  document.getElementById("app").innerHTML = AddNotePage().render()
}

const addNote = function() {
  title = document.getElementById('title').value;
  body = document.getElementById('body').value;
  notePad.add(new Note (title, body));
  document.getElementById("app").innerHTML = IndexPage().render(notePad.listNotes());
}
