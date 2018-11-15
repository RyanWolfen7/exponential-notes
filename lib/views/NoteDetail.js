(function (exports) {
  function NoteDetail() {
    function render(note) {
      return `
        <div>
          <h3>${note.title}</h3>
          <p>${note.body}</p>
        </div>
      `
    }
    return {
      render: render
    }
  }
  exports.NoteDetail = NoteDetail;
})(this);
