let notePad;
window.addEventListener("load", function() {
  notePad = new NotePad;
  document.getElementById("app").innerHTML = IndexPage().render(notePad.listNotes());
}, false)

const handleNoteDetailPage = function(index) {
  document.getElementById("app").innerHTML = DetailPage().render(index);
}

const handleEditNotePage = function(index) {
  document.getElementById("app").innerHTML = NotesEditPageView().render(notePad.listNotes()[index], index);
}

const updateNote = function(index, title, body) {
  notePad.update(index, title, body);
  document.getElementById("app").innerHTML = DetailPage().render(index);
}
