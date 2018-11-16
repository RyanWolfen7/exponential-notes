(function (exports) {
  function IndexPage() {
    function render(notes) {
      return `
    ${NavBar().render()}
      <div>
        <button class="btn btn-success" id="add" onclick="renderAddNote()">Add Note</button>
      </div>
      ${ListIndex().render(notes)}
      `
    }
    return {
      render: render
    }
  }
  exports.IndexPage = IndexPage;
})(this);
