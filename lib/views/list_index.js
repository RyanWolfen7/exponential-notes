(function (exports) {
  function ListIndex() {
    function render(listNotes) {
      var items = listNotes.map((note, index) => {
        note.index = index;
        return NoteListItem().render(note);
      })
      return `

        <div id="listNotes">
        ${items}
        </div>
      `
    }
    return {
      render: render
    }
  }
  exports.ListIndex = ListIndex;
} (this));
