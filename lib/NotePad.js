(function(exports) {

  function NotePad() {

    let notes = []

    function listNotes() {
      return notes
    }

    function deleteNote(index) {
      this.notes.splice(index, 1)
    }

    function add(note) {
      notes.push(note)
    }

    function update(index, title, body) {
      notes[index].title = title
      notes[index].body = body
    }

    function find(index) {
      return notes[index]
    }

    return {
      listNotes: listNotes,
      deleteNote: deleteNote,
      add: add,
      update: update,
      find: find
    }
  }

  exports.NotePad = NotePad

})(this)
