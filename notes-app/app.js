const chalk = require('chalk');
const yargs = require('yargs')
const fs = require('fs');
const getNotes = require('./notes');
const { describe } = require('yargs');
console.log(getNotes())

// Customize yargs version
yargs.version('1.1.0')

// Command to excute add notes, remove notes, read notes, list notes
// Add Command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    handler :  handler =() => {
        console.log('Adding a new note !!')
    }
})
// Remove command
yargs.command({
    command : 'remove',
    describe : 'Remove a note',
    handler :  handler =() => {
        console.log('Removing a note !!')
    }
})
// Read command
const read ={
    command : 'read',
    describe : 'Read the note',
    handler : handler = () =>{
        console.log('Read the note')
    }
}
yargs.command(read)
// List Command
const list= {
    command : 'list',
    describe : 'List all the notes',
    handler : handler = () => {
        console.log('Listing all the notes : ');
    }
}
yargs.command(list)
console.log(yargs.argv)