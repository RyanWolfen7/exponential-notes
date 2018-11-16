(function (exports) {
  function NoteDetail() {
    function render(note) {
      return `

      ${NavBar().render()}
        <div>
          <h3>${note.title}</h3>
          <p>${note.body}</p>
          <button onclick="handleNoteEditPage(${note.index})">Edit</button>
          <button id="delete" onclick="handleDeleteNote(${note.index})">Delete</button>
        </div>
      `
    }
    return {
      render: render
    }
  }
  exports.NoteDetail = NoteDetail;
})(this);
