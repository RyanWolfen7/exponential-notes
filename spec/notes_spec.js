const expect = require("../tests/expect");
const Notes = require("../lib/Notes");

console.log("Expects 'Notes.add' to push a note to the notes array");
var notes = new Notes();
notes.add("Hello");
new expect(notes.notes[0]).toEqual('Hello');

console.log("should delete note from notes");
notes = new Notes();
notes.notes = [1,2,3]
notes.delete(2)
new expect(notes.notes.length).toEqual(2)
