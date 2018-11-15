(function (exports) {
  function NavBar() {
    function render() {
      return `

      <div>
        <h1> Exponential Notes </h1>
        <button id="home" onclick="Index().render()">Home</button>
      </div>
      `
    }
    return {
      render: render
    }
  }
  exports.NavBar = NavBar;
})(this);
