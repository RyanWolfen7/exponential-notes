const expect = require("../tests/expect");
const Notes = require("../lib/Notes");
const notesData = require("./fixtures/notes");

console.log("Expects 'Notes.add' to push a note to the notes array");
var notes = new Notes();
notes.add("Hello");
new expect(notes.notes[0]).toEqual('Hello');

console.log("should update a specific note");
var notes = new Notes();
notes.notes = notesData
notes.update(1, 'updated title', 'changed body')
new expect(notes.notes[1].title).toEqual('updated title')
