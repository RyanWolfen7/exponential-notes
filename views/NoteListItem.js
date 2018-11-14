(function (exports) {
  function NoteListItem() {
    function render(title) {
      return `
        <div>
          <h3>${title}</h3>
        </div>
      `
    }
    return {
      render: render
    }
  }
  exports.NoteListItem = NoteListItem;
})(this);
