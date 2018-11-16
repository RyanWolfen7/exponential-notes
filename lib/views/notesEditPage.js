(function (exports) {
  function NotesEditPageView() {
    function render(note, index) {
      return `
        ${NavBar().render()}
        ${NoteForm().render(note, `updateNote(${index})`)}
      `
    }
    return {
      render: render
    }
  }
  exports.NotesEditPageView = NotesEditPageView;
})(this);
