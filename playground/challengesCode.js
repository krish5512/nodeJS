// Challenge 1
// const add = require('./utils.js')
// const sum = add(5,5);
// console.log(sum);

// Challenge 2
// const notesFunc = require('./notes');
// const validator = require('validator');
// console.log(validator.isEmail('krishna@gmail.com'));
// console.log(validator.isURL('https://www.google.com'))
// console.log(notesFunc())

// Challenge 3
// installed nodemon to excecute node js file automatically
// const chalk = require('chalk');
// console.log(chalk.green('Success'))
// console.log(chalk.bold.red('TRY AGAIN'))
// console.log(chalk.bold.blue.inverse('Success'))


// Challenge 4
// Take user input from cli arguement to perform add or remove in notes app
// const getNotes = require('./notes');
// const chalk = require('chalk');
// const fs = require('fs');
// console.log(getNotes())
// const command = process.argv[2];
// console.log(process.argv)
// if (command === 'add') {
//     console.log('Adding Note')
// } else if (command === 'remove') {
//     console.log('Remove note')
// }

// CHallenge 5
// Entering Notes title and body from Command line
// const yargs = require('yargs')

// // Customize yargs version
// yargs.version('1.1.0')

// // Command to excute add notes, remove notes, read notes, list notes
// // Add Command
// yargs.command({
//     command : 'add',
//     describe : 'Add a new note',
//     builder : {
//         title : {
//             describe : 'Note Title',
//             demandOption : true,   //Used to check if an arguement is neccessary or not
//             type: 'string' // Type of arguement which is needed
//         },
//         body : {
//             describe : 'Note Body',
//             demandOption : true,   //Used to check if an arguement is neccessary or not
//             type: 'string' // Type of arguement which is needed
//         },
//     },
//     handler :  handler = (argv) => {
//         console.log('Title : '+ argv.title)
//         console.log('Body : '+ argv.body)
//     }
// })