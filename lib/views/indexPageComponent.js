(function (exports) {
  function Index() {
    function render() {
      return `
      ${NavBar.render()}
      <h1> Exponential Notes </h1>
      <div>
        <button id="add" onclick="add()">Add Note</button>
      </div>
      ${ListIndex.render()}
      `
    }
    return {
      render: render
    }
  }
  exports.Index = Index;
})(this);
