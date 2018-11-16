(function (exports) {
  function NoteForm() {
    function render(note, action) {
      return `
        <div class="container">
          <form>
            <div class="form-group">
              <label for="title">Title</label>
                <input class="form-control" id='title' name='title' type='text' placeholder='title' value="${note.title}">
              <label for="body">Note</label>
                <textarea class="form-control" id='body' name='body' type='text' placeholder='body'>${note.body}</textarea>
                <br>
              <button class="btn btn-success float-right" id='submit' onclick='${action}'>Submit</button>
            </div>
          </form>
        </div>
      `
    }

    return {
      render: render
    }
  }
  exports.NoteForm = NoteForm;
})(this);
