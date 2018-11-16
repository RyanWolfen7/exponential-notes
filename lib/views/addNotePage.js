(function (exports) {
  function NotesAddPageView() {
    function render() {
      return `
        ${NavBar().render()}

        <div>
          <form>
            <input id='title' name='title' type='text' placeholder='title'>
            <input id='body' name='body' type='text' placeholder='body'>
            <button id='submit' onclick='Notepad().add(new Note(params[:title], params[:body]))'>Submit</button>
          </form>
        </div>
      `
    }
    return {
      render: render
    }
  }
  exports.NotesAddPageView = NotesAddPageView;
})(this);
