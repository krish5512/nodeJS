// Challenge 2
const fs = require('fs')
const getNotes = () => {
    return "Your Notes.....";
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = JSON.parse(dataBuffer.toString());
        return dataJson;
    } catch (e) {
        return []
    }

}
const saveNotes = notesArr => {
    try {
        const notesJSON = JSON.stringify(notesArr);
        fs.writeFileSync('notes.json', notesJSON);
    } catch (e) {

    }

}
const addNote = (title, body) => {
    const notes = loadNotes();
    const checkDupli = notes.filter(note => note.title === title);
    if (checkDupli.length === 0) {
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes);
        console.log('New Note added..!!')
    } else {
        console.log('Note title already taken....')
    }

}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
};