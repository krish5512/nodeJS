const chalk = require('chalk');
const yargs = require('yargs')
const fs = require('fs');
const getNotes = require('./notes');
console.log(getNotes())

// Customize yargs version
yargs.version('1.1.0')

// Command to excute add notes, remove notes, read notes, list notes
// Add Command
yargs.command({
    command : 'add',
    describe : 'Add a new note',
    builder : {
        title : {
            describe : 'Note Title',
            demandOption : true,   //Used to check if an arguement is neccessary or not
            type: 'string' // Type of arguement which is needed
        },
        body : {
            describe : 'Note Body',
            demandOption : true,   //Used to check if an arguement is neccessary or not
            type: 'string' // Type of arguement which is needed
        },
    },
    handler :  handler = (argv) => {
        console.log('Title : '+ argv.title)
        console.log('Body : '+ argv.body)
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
// Read command to read title of note
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

yargs.parse() // It parses the values which is being passed
// console.log(yargs.argv)