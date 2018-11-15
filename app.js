window.addEventListener("load", function() {
  document.getElementById("app").innerHTML = IndexPage().render();
}, false)

const handleNoteDetailPage = function(index) {
  document.getElementById("app").innerHTML = DetailPage().render(index);
}
