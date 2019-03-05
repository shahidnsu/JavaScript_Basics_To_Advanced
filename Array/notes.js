const notes = [ {
      title : 'Habbits to wrok on',
      body : 'Try to minizie sleep time'
},{
    title : 'My plan',
    body : 'Go to google'

},{
    title : 'My goal',
    body : 'Go to google'

}]


const findNoteUsingFind = function(notes, notesTitle){

    return notes.find(function(note, index){
        return note.title === notesTitle
    })
}
/*
const findNote = function (notes, noteTitle) {
        const index = notes.findIndex(function (note, index) {
             return note.title === noteTitle
         })
         return notes[index]
 }
 */

const note = findNoteUsingFind(notes, 'My goal');
console.log(note)
/*
const index = notes.findIndex(function(note, index){

    console.log(notes)
    return note.title ==='My plan';
})
console.log(index);
*/

//using of filter method

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}
console.log(findNotes(notes, 'goo'));