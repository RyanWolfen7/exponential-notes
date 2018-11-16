(function (exports) {
  function AddNotePage() {
    function render() {
      return `
        ${NavBar().render()}

        <div>
          <form>
            <input id='title' name='title' type='text' placeholder='$title'>
            <input id='body' name='body' type='text' placeholder='body'>
            <button id='submit' onclick="AddNotePage(index)">Submit</button>
          </form>
        </div>
      `
    }
    return {
      render: render
    }
  }
  exports.AddNotePage = AddNotePage;
})(this);
