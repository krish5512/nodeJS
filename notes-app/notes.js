const fs = require('fs');
const chalk = require('chalk');

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
        console.log(chalk.green('New Note added..!!'))
    } else {
        console.log(chalk.red('Note title already taken....'))
    }
}
const removeNote = (title) => {
    const notes = loadNotes();
    const filteredNote = notes.filter(note => note.title !== title);
    saveNotes(filteredNote);
    if (notes.length === filteredNote.length) {
        console.log(chalk.bold.red('No note removed..!!'))

    } else {
        console.log(chalk.bold.green('Note removed..!!'))
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
};