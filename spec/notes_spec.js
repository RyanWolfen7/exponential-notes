let noteListItem;
let indexPage;
let notePad;
let noteOne;
let noteTwo;
let noteThree;
let noteDetail;


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

console.log('\n\n------VIEW COMPONENTS------')
console.log("should render the NoteListItem correctly")
noteListItem = new NoteListItem()
let html = noteListItem.render({index: 1, title: 'Test title'})
console.log('should have title')
expect(html).toHaveContent('<h3>Test title</h3>')

console.log('should have read button')
expect(html).toHaveContent('<button onclick="handleNoteDetailPage(1)">Read</button>')


console.log('\n\n#C IndexPage')
console.log('should render index view correctly')
indexPage = new IndexPage()
notePad = new NotePad()
notePad.add(new Note('Note one', 'Body one'))
notePad.add(new Note('Note two', 'Body two'))
notePad.add(new Note('Note three', 'Body three'))
html = indexPage.render(notePad.listNotes())
console.log('shoudl have note one')
expect(html).toHaveContent('<h3>Note one</h3>')
console.log('shoudl have note two')
expect(html).toHaveContent('<h3>Note two</h3>')
console.log('shoudl have note three')
expect(html).toHaveContent('<h3>Note three</h3>')

console.log('should render index page component')
indexPageComponent = new Index()
html = indexPageComponent.render()
expect(html).toHaveContent('<button id="add" onclick="add()">Add Note</button>')

console.log("should render NoteDetail correctly")
noteDetail = new NoteDetail()
html = noteDetail.render({index: 1, title: 'Test title'})
 console.log('should have title')
 expect(html).toHaveContent('<h3>Test title</h3>')
 html = noteDetail.render({body: 'Test body'})
console.log('should have body')
expect(html).toHaveContent('<p>Test body</p>')

