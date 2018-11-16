(function (exports) {
  function AddNotePage() {
    function render() {
      return `
        ${NavBar().render()}
        ${NoteForm().render(new Note(), 'addNote()')}
      `
    }
    return {
      render: render
    }
  }
  exports.AddNotePage = AddNotePage;
})(this);
