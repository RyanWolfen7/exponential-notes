const Expect = require("../exponential-testing/lib/Expect")
const Notes = require("../lib/Notes")
const notesData = require("./fixtures/notes");

console.log("Expect to see a list of notes")
var notes = new Notes();
notes.notes.push("this")
notes.notes.push("is")
notes.notes.push("a")
notes.notes.push("bunch")
notes.notes.push("of")
notes.notes.push("notes")
var array = [ 'this', 'is', 'a', 'bunch', 'of', 'notes' ];
new Expect(notes.listNotes()).compare_array(array);


console.log("Expects 'Notes.add' to push a note to the notes array");
var notes = new Notes();
notes.add("Hello");
new Expect(notes.notes[0]).toEqual('Hello');


console.log("should update a specific note");
var notes = new Notes();
notes.notes = notesData
notes.update(1, 'updated title', 'changed body')
new Expect(notes.notes[1].title).toEqual('updated title')

console.log("should delete note from notes");
notes = new Notes();
notes.notes = [1,2,3]
notes.delete(2)
new Expect(notes.notes.length).toEqual(2)
