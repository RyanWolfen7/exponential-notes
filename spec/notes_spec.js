const Expect = require("../exponential-testing/lib/Expect");
const Notes = require("../lib/Notes");

console.log("Expects 'Notes.add' to push a note to the notes array");
var notes = new Notes();
notes.add("Hello");
new Expect(notes.notes[0]).toEqual('Hello');
