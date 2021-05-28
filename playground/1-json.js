const fs = require('fs');
// const book = {
//     title: 'This is the book',
//     author: 'Krish',
// };
// // JSON.stringify takes object and returns JSON string back
// const jsonBook = JSON.stringify(book);
// fs.writeFileSync('1-json.json', jsonBook)

// const dataBuffer = fs.readFileSync('1-json.json');
// const fileData = dataBuffer.toString();
// console.log(JSON.parse(fileData))

const dataBuffer = fs.readFileSync('1-json.json');
const jsonData = JSON.parse(dataBuffer.toString());
console.log(jsonData);
jsonData.name = 'krishna';
jsonData.age = 25;

console.log(jsonData)
fs.writeFileSync('1-json.json', JSON.stringify(jsonData))