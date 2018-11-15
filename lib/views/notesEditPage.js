(function (exports) {
  function NotesEditPageView() {
    function render() {
      return `
        ${NavBar().render()}

        <div>
          <form>
            <input id='title' name='title' type='text' placeholder='${notes.title}'>
            <input id='body' name='body' type='text' placeholder='${notes.body}'>
            <button id='submit' onclick='update(${notes.index}, params[:title], params[:body])'>Submit</button>
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
