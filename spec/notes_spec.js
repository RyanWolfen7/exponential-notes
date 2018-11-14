let notePad;

console.log('should show a list of the notes')
notePad = new NotePad()
notePad.add("this")
notePad.add("is")
notePad.add("a")
notePad.add("bunch")
notePad.add("of")
notePad.add("notes")
let array = [ 'this', 'is', 'a', 'bunch', 'of', 'notes' ];
expect(notePad.listNotes()).compareArray(array);

console.log("Expects 'Notes.add' to push a note to the notes array");
notePad = new NotePad();
notePad.add("Hello");
expect(notePad.listNotes()[0]).toEqual('Hello');

console.log("Expects 'Notes.find' to find a specific note from the array");
notePad.add("World");
expect(notePad.find(0)).toEqual("Hello");

console.log("should update a specific note");
notePad = new NotePad();
notesData.forEach((note) => notePad.add(note))
notePad.update(1, 'updated title', 'changed body')
expect(notePad.find(1).title).toEqual('updated title')

console.log("should delete note from notes");
notePad = new NotePad();
notePad.notes = [1,2,3]
notePad.deleteNote(2)
expect(notePad.notes.length).toEqual(2)
