(function (exports) {
  function NoteDetail() {
    function render(note) {
      return `

      ${NavBar().render()}
        <div class="container">
          <h3>${note.title}</h3>
          <p>${note.body}</p>
          <button class="btn btn-success float-right" onclick="handleNoteEditPage(${note.index})">Edit</button>
        </div>
      `
    }
    return {
      render: render
    }
  }
  exports.NoteDetail = NoteDetail;
})(this);
