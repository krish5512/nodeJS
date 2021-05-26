// Challenge 1
// const add = require('./utils.js')
// const sum = add(5,5);
// console.log(sum);

// Challenge 2
const notesFunc = require('./notes');
const validator = require('validator');
console.log(validator.isEmail('krishna@gmail.com'));
console.log(validator.isURL('https://www.google.com'))
console.log(notesFunc())