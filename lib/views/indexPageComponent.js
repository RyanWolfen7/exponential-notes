(function (exports) {
  function Index() {
    function render() {
      return `
    ${NavBar().render()}
      <div>
        <button id="add" onclick="add()">Add Note</button>
      </div>
      ${ListIndex().render([])}
      `
    }
    return {
      render: render
    }
  }
  exports.Index = Index;
})(this);
