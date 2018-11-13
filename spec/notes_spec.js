const Expect = require("../exponential-testing/lib/Expect")
const Note = require("../lib/Notes")

console.log("Expect to see a list of notes")
var notes = new Notes;
notes.notes().push("this")
notes.notes().push("is")
notes.notes().push("a")
notes.notes().push("bunch")
notes.notes().push("of")
notes.notes().push("notes")
var bunchOfNotes = function() {
  var string = "";
  for (var i = 0; i < notes.notes.length; i++) {
    string = string + notes.notes[i];
  };
};
new Expect(string).toEqual("thisisabunchofnotes");
