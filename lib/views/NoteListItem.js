(function (exports) {
  function NoteListItem() {
    function render(note) {
      return `
        <div>
          <h3>${note.title}</h3>
          <button onclick="handleNoteDetailPage(${note.index})">Read</button>
        </div>
      `
    }
    return {
      render: render
    }
  }
  exports.NoteListItem = NoteListItem;
})(this);
