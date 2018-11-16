(function (exports) {
  function ListIndex() {
    function render(listNotes) {
      var items = listNotes.map((note, index) => {
        note.index = index;
        console.log(note)
        return NoteListItem().render(note);
      })
      return `

        <ul id="listNotes" class="list-group list-group-flush">
        ${items}
        </ul>
      `
    }
    return {
      render: render
    }
  }
  exports.ListIndex = ListIndex;
} (this));
