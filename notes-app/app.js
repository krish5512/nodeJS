const yargs = require('yargs')
const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0')

// Command to excute add notes, remove notes, read notes, list notes
// Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true, //Used to check if an arguement is neccessary or not
            type: 'string' // Type of arguement which is needed
        },
        body: {
            describe: 'Note Body',
            demandOption: true, //Used to check if an arguement is neccessary or not
            type: 'string' // Type of arguement which is needed
        },
    },
    handler: handler = (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})
// Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler: handler = (argv) => {
        notes.removeNote(argv.title)
    }
})
// Read command to read title of note
yargs.command({
    command: 'read',
    describe: 'Read the note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string',
        },
    },
    handler: handler = (argv) => {
        notes.readNote(argv.title)
    }
})
// List Command
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler: handler = () => {
        notes.listNotes();
    }
})

yargs.parse() // It parses the values which is being passed