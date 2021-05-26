const getNotes = require('./notes');
const chalk = require('chalk');
const fs = require('fs');
console.log(getNotes())
const command = process.argv[2];
console.log(process.argv)
if (command === 'add') {
    console.log('Adding Note')
} else if (command === 'remove') {
    console.log('Remove note')
}