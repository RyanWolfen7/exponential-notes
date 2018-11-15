(function (exports) {
  function ListIndex() {
    function render(listNotes) {
      var items = listNotes.map((note, index)=>{
        note.index = index;
        ListNoteItem().render(note);
      })
      // for(var i = 0; i < listNotes.length; i++) {
      //   var a = "<a href='" + this.notes[i].toString() + "' >" + this.notes[i].toString() "</a>";
      //   return a.innerHTML;
      // }
      return `

        <div id="listNotes">
        ${items}
        </div>
      `
    }
    return {
      render: render
    }
  }
  exports.ListIndex = ListIndex;
} (this));
