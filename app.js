let notePad;
window.addEventListener("load", function() {
  notePad = new NotePad;
  document.getElementById("app").innerHTML = IndexPage().render(notePad.notes);
}, false)

const handleNoteDetailPage = function(index) {
  document.getElementById("app").innerHTML = DetailPage().render(index);
}

const editNotePage = function(index) {
  document.getElementById("app").innerHTML = NotesEditPageView().render(index);
}
