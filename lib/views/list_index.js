(function (exports) {
  function ListIndex() {
    function render(listNotes) {
      var items = listNotes.map((note, index) => {
        note.index = index;
        return NoteListItem().render(note);
      })
      return `
        <div class="container">
          <ul id="listNotes" class="list-group list-group-flush">
          ${items}
          </ul>
        </div>
      `
    }
    return {
      render: render
    }
  }
  exports.ListIndex = ListIndex;
} (this));
