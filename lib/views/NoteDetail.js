(function (exports) {
  function NoteDetail() {
    function render(note) {
      return `
        <div>
          <h3>${note.title}</h3>
          <p>${note.body}</p>
          <button onclick="handleNoteEditPage(${note.index})">Edit</button>
        </div>
      `
    }
    return {
      render: render
    }
  }
  exports.NoteDetail = NoteDetail;
})(this);
