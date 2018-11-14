(function (exports) {
  function Index() {
    function render() {
      return `
      <div>
        <h1> Exponential Notes </h1>
        <button id="home" onclick="home()">Home</button>
      </div>
      <div>
        <button id="add" onclick="add()">Add Note</button>
      </div>
      `
    }
    return {
      render: render
    }
  }
  exports.Index = Index;
})(this);
