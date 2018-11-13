const Expect = require("../exponential-testing/lib/Expect")
const Notes = require("../lib/Notes")

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
