(function (exports) {
  function NoteListItem() {
    function render(note) {
      return `
        <li class="list-group-item">
          <h3>${note.title}</h3>
          <button onclick="handleNoteDetailPage(${note.index})">Read</button>
        </li>
      `
    }
    return {
      render: render
    }
  }
  exports.NoteListItem = NoteListItem;
})(this);
