const fs = require('fs');
const chalk = require('chalk');

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
    // const checkDupli = notes.filter(note => note.title === title);
    const checkDupliNote = notes.find(note => note.title === title);
    if (!checkDupliNote) {
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
const listNotes = () => {
    const notes = loadNotes();
    console.log("Your notes ...")
    notes.forEach((note, index) => {
        console.log(index + 1 + '. ' + note.title + '.')
    });
}
const readNote = (title) => {
    const notes = loadNotes();
    const isNote = notes.find(note => note.title === title);
    if (isNote) {
        console.log(chalk.blue.bold('Note title : ' + isNote.title));
        console.log('Note body : ' + isNote.body)
    } else {
        console.log(chalk.red('No note found'))
    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote:readNote,
};