(function (exports) {
  function NotePageView() {
    function render(note) {
      return `

        ${NavBar().render()}
        ${Note().render()}
        <div>
          <button id="edit" onclick="editNotePage(index)">Edit Note</button>
          <button id="delete" onclick="handleDeleteNote(index)">Delete Note</button>
        </div>
      `
    }
    return {
      render: render
    }
  }
  exports.NotePageView = NotePageView;
})(this);
