(function (exports) {
  function NoteListItem() {
    function render(note) {
      return `
        <li class="list-group-item border">
          <h3>${note.title}</h3>
          <button class="btn btn-success float-right" onclick="handleNoteDetailPage(${note.index})">Read</button>
        </li>
      `
    }
    return {
      render: render
    }
  }
  exports.NoteListItem = NoteListItem;
})(this);
