const expect = require('./expect')
const Notes = require('../lib/Notes')

console.log("should delete note from notes");
notes = new Notes();
notes.notes = [1,2,3]
notes.delete(2)
new expect(notes.notes.length).toEqual(2)
