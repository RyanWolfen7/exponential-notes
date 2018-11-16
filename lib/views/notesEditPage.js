(function (exports) {
  function NotesEditPageView() {
    function render(note, index) {
      return `
        ${NavBar().render()}

        <div>
          <form>
            <input id='title' name='title' type='text' value='${note.title}'>
            <input id='body' name='body' type='text' value='${note.body}'>
            <button onclick='updateNote(${index}, params[:title], params[:body])'>Submit</button>
          </form>
        </div>
      `
    }
    return {
      render: render
    }
  }
  exports.NotesEditPageView = NotesEditPageView;
})(this);
