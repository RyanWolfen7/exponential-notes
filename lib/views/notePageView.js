(function (exports) {
  function NotePageView() {
    function render() {
      return `

        ${NavBar().render()}
        ${Note().render()}
        <div>
          <button id="edit" onclick="NotesEditPageView().render()">Edit Note</button>
          <button id="delete" onclick="delete()">Delete Note</button>
        </div>
      `
    }
    return {
      render: render
    }
  }
  exports.NotePageView = NotePageView;
})(this);
