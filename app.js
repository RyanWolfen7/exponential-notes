window.addEventListener("load", function() {
  console.log("here")
  document.getElementById("app").innerHTML = NavBar().render();
  document.getElementById("app").innerHTML = Index().render();
}, false)
